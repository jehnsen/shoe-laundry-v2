"use client";

import { startTransition, useActionState, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { requestPickup, type BookingField, type BookingState } from "@/app/actions";
import { Icon, type IconName } from "@/components/icon";
import { arrowClass, buttonClass } from "@/components/ui";
import { scents, timeSlots } from "@/lib/site";

const categories: { value: string; label: string; icon: IconName }[] = [
  { value: "clothing", label: "Clothing", icon: "shirt" },
  { value: "shoes", label: "Shoes", icon: "sneaker" },
  { value: "both", label: "Both", icon: "sparkles" },
];

const fieldOrder: BookingField[] = ["name", "phone", "address", "date", "time"];

const inputClass =
  "w-full rounded-xl border-[1.5px] border-line bg-white px-3.5 py-3 text-[15px] text-ink transition-[border-color,box-shadow] placeholder:text-[#9aa6b6] focus:border-brand focus:shadow-[0_0_0_4px_var(--color-brand-50)] focus:outline-none aria-invalid:border-danger";

const toISODate = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

/** Remounting the inner form (via `key`) is how "Book another pickup" resets everything. */
export function BookingForm() {
  const [formKey, setFormKey] = useState(0);
  return <PickupForm key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}

function PickupForm({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState<BookingState, FormData>(requestPickup, { status: "idle" });
  const [edited, setEdited] = useState<Set<BookingField>>(new Set());
  const formRef = useRef<HTMLFormElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLButtonElement>(null);

  // Earliest pickup date is "today" in the visitor's own timezone.
  useEffect(() => {
    if (dateRef.current) dateRef.current.min = toISODate(new Date());
  }, []);

  // Move focus to the first invalid field, or to the success message.
  useEffect(() => {
    if (state.status === "error") {
      const first = fieldOrder.find((f) => state.errors[f]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    } else if (state.status === "success") {
      successRef.current?.focus();
    }
  }, [state]);

  const errorFor = (field: BookingField) =>
    state.status === "error" && !edited.has(field) ? state.errors[field] : undefined;

  const markEdited = (field: BookingField) => {
    if (errorFor(field)) setEdited((prev) => new Set(prev).add(field));
  };

  // Submit without React's automatic form reset, so values survive a validation error.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setEdited(new Set());
    startTransition(() => formAction(data));
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      className="reveal relative grid gap-[18px] rounded-3xl border border-line bg-white p-[clamp(24px,4vw,36px)] shadow-card"
    >
      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm font-bold text-ink">What are we cleaning?</legend>
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          {categories.map((c, i) => (
            <label key={c.value} className="relative">
              <input type="radio" name="category" value={c.value} defaultChecked={i === 0} className="peer absolute inset-0 m-0 cursor-pointer opacity-0" />
              <span className="flex flex-col items-center justify-center gap-1 rounded-xl border-[1.5px] border-line bg-white px-1.5 py-3 text-[13.5px] font-bold text-muted transition-colors peer-checked:border-brand peer-checked:bg-brand-50 peer-checked:text-brand-600 peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brand/45 sm:flex-row sm:gap-2 sm:px-2.5 sm:text-[14.5px]">
                <Icon name={c.icon} className="size-[18px]" />
                {c.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="min-w-0">
        <legend className="mb-2 text-sm font-bold text-ink">
          Signature scent <span className="font-medium text-muted">(for clothing)</span>
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {scents.map((s, i) => (
            <label key={s.id} className="relative">
              <input type="radio" name="scent" value={s.id} defaultChecked={i === 0} className="peer absolute inset-0 m-0 cursor-pointer opacity-0" />
              <span className="flex items-center gap-2 rounded-xl border-[1.5px] border-line bg-white px-3 py-2.5 text-[13px] leading-tight font-semibold text-muted transition-colors peer-checked:border-shoe peer-checked:bg-shoe-50 peer-checked:text-ink peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-shoe/45">
                <span
                  aria-hidden="true"
                  className="size-4 shrink-0 rounded-full border border-white shadow-[0_0_0_1px_var(--color-line)]"
                  style={{ background: `radial-gradient(circle at 35% 30%, #fff 0 12%, ${s.color} 70%)` }}
                />
                {s.name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="f-name" label="Full name" error={errorFor("name")}>
          <input id="f-name" name="name" type="text" autoComplete="name" required placeholder="Jane Doe" onInput={() => markEdited("name")} {...invalidProps("f-name", errorFor("name"))} className={inputClass} />
        </Field>
        <Field id="f-phone" label="Phone" error={errorFor("phone")}>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" required placeholder="(555) 000-0000" onInput={() => markEdited("phone")} {...invalidProps("f-phone", errorFor("phone"))} className={inputClass} />
        </Field>
      </div>

      <Field id="f-address" label="Pickup address" error={errorFor("address")}>
        <input id="f-address" name="address" type="text" autoComplete="street-address" required placeholder="Street, building, unit" onInput={() => markEdited("address")} {...invalidProps("f-address", errorFor("address"))} className={inputClass} />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="f-date" label="Pickup date" error={errorFor("date")}>
          <input ref={dateRef} id="f-date" name="date" type="date" required onChange={() => markEdited("date")} {...invalidProps("f-date", errorFor("date"))} className={inputClass} />
        </Field>
        <Field id="f-time" label="Time window" error={errorFor("time")}>
          <select
            id="f-time"
            name="time"
            required
            defaultValue=""
            onChange={() => markEdited("time")}
            {...invalidProps("f-time", errorFor("time"))}
            className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%235e6c81'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='m6%209%206%206%206-6'/%3E%3C/svg%3E")] bg-[length:18px] bg-[position:right_12px_center] bg-no-repeat pr-10`}
          >
            <option value="">Select a window</option>
            {timeSlots.map((slot) => (
              <option key={slot}>{slot}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="f-notes" label={<>Notes <span className="font-medium text-muted">(optional)</span></>}>
        <textarea id="f-notes" name="notes" rows={3} maxLength={1000} placeholder="e.g. 2 suits, 1 pair of suede boots, gate code 1234" className={`${inputClass} min-h-[92px] resize-y`} />
      </Field>

      <button type="submit" disabled={pending} className={buttonClass({ size: "lg", className: "w-full" })}>
        {pending ? "Sending…" : "Request pickup"}
        {!pending && <Icon name="arrow" className={arrowClass} />}
      </button>
      <p className="-mt-1 text-center text-[13px] text-muted">
        No payment needed now. You&apos;ll only be charged after your items are inspected.
      </p>

      <div role="status" aria-live="polite">
        {state.status === "success" && (
          <div className="absolute inset-0 z-[2] flex animate-fade-up flex-col items-center justify-center rounded-[inherit] bg-white p-8 text-center">
            <span className="mb-6 grid size-16 place-items-center rounded-full bg-brand text-white ring-[10px] ring-brand-50">
              <Icon name="check" className="size-[30px]" strokeWidth={3} />
            </span>
            <h3 className="text-2xl font-extrabold">Pickup requested</h3>
            <p className="mt-2.5 mb-6 max-w-[360px] text-muted">
              Thanks{state.firstName ? `, ${state.firstName}` : ""}! We&apos;ll text you shortly to confirm your {state.slot} pickup
              {state.scent ? <> — finished in <strong className="text-shoe">{state.scent}</strong></> : null}.
            </p>
            <button ref={successRef} type="button" onClick={onReset} className={buttonClass({ variant: "ghost" })}>
              Book another pickup
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

function invalidProps(id: string, error?: string) {
  return error ? { "aria-invalid": true, "aria-describedby": `${id}-error` } : {};
}

function Field({ id, label, error, children }: { id: string; label: ReactNode; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[13px] font-semibold text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
