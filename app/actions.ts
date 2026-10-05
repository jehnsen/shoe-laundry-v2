"use server";

import { scents, timeSlots } from "@/lib/site";

export type BookingField = "name" | "phone" | "address" | "date" | "time";

export type BookingState =
  | { status: "idle" }
  | { status: "error"; errors: Partial<Record<BookingField, string>>; values: Record<string, string> }
  | { status: "success"; firstName: string; slot: string; scent: string };

const categories = ["clothing", "shoes", "both"] as const;

export async function requestPickup(_prev: BookingState, formData: FormData): Promise<BookingState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();
  const values = {
    category: get("category"),
    scent: get("scent"),
    name: get("name"),
    phone: get("phone"),
    address: get("address"),
    date: get("date"),
    time: get("time"),
    notes: get("notes").slice(0, 1000),
  };

  const errors: Partial<Record<BookingField, string>> = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[0-9+()\-\s]{7,20}$/.test(values.phone)) errors.phone = "Please enter a valid phone number.";
  if (values.address.length < 5) errors.address = "Please enter a pickup address.";
  if (!isValidPickupDate(values.date)) errors.date = "Please choose today or a later date.";
  if (!timeSlots.includes(values.time)) errors.time = "Please choose a time window.";
  if (!categories.includes(values.category as (typeof categories)[number])) values.category = "clothing";
  const scent = scents.find((s) => s.id === values.scent) ?? scents[0];

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors, values };
  }

  // TODO: persist the booking or notify the shop (email, SMS, CRM, database…).
  // e.g. await sendBookingEmail(values)

  const date = new Date(`${values.date}T00:00:00`);
  const dateLabel = date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });

  return {
    status: "success",
    firstName: values.name.split(/\s+/)[0],
    slot: `${dateLabel}, ${values.time}`,
    scent: values.category === "shoes" ? "" : scent.name,
  };
}

function isValidPickupDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const picked = new Date(`${value}T00:00:00Z`).getTime();
  if (Number.isNaN(picked)) return false;
  // Allow one day of slack so customers in timezones behind the server can still book "today".
  const earliest = Date.now() - 36 * 60 * 60 * 1000;
  const latest = Date.now() + 90 * 24 * 60 * 60 * 1000;
  return picked >= earliest && picked <= latest;
}
