import type { IconName } from "@/components/icon";

/**
 * All business details and page copy live here.
 * Replace the placeholder values below with the real shop information.
 */

export const site = {
  name: "Scented Bubbles & Shoe Laundry Co.",
  legalName: "Scented Bubbles & Shoe Laundry Co.",
  logo: { primary: "Scented Bubbles", secondary: "& Shoe Laundry Co." },
  tagline: "Laundry · Dry cleaning · Shoe care",
  description:
    "Fresh-scented laundry, dry cleaning and professional shoe care with free pickup and delivery. Wash & fold in your choice of signature scent, pressing, sneaker deep cleaning and restoration.",
  phone: "(555) 012-3456",
  phoneHref: "tel:+15550123456",
  email: "hello@scentedbubbles.co",
  address: ["128 Market Street, Suite 4", "Springfield, ST 10010"],
  hours: ["Mon–Fri 7:00 AM – 8:00 PM", "Sat–Sun 8:00 AM – 6:00 PM"],
  freeDeliveryMin: "$30",
  social: {
    instagram: "#",
    facebook: "#",
  },
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#scents", label: "Scents" },
  { href: "#process", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
];

export const stats = [
  { value: 48000, suffix: "+", label: "Garments cleaned" },
  { value: 9500, suffix: "+", label: "Pairs of shoes restored" },
  { value: 48, suffix: "h", label: "Standard turnaround" },
  { value: 100, suffix: "%", label: "Satisfaction guarantee" },
];

export type Service = { icon: IconName; title: string; body: string; meta: string };
export type Category = "clothing" | "shoes";

export const services: Record<Category, Service[]> = {
  clothing: [
    { icon: "washer", title: "Wash & Fold", body: "Everyday laundry sorted by colour and fabric, washed at the right temperature and finished in your signature scent.", meta: "From $1.95 / lb" },
    { icon: "hanger", title: "Dry Cleaning", body: "Gentle solvent cleaning for suits, coats, wool and structured garments that can't go in water.", meta: "From $7.00 / item" },
    { icon: "iron", title: "Pressing & Ironing", body: "Crisp, professional finishing for shirts, trousers and dresses. Returned on hangers, ready to wear.", meta: "From $3.50 / item" },
    { icon: "bed", title: "Bedding & Linens", body: "Comforters, duvets, sheets and curtains washed in large-capacity machines and sanitised.", meta: "From $25.00 / item" },
    { icon: "feather", title: "Delicates & Silk", body: "Hand-wash care for silk, lace, cashmere and embellished pieces, following every label instruction.", meta: "From $9.00 / item" },
    { icon: "droplet", title: "Stain Treatment", body: "Targeted pre-treatment for wine, coffee, grease and ink — applied before any wash cycle.", meta: "Included with every order" },
  ],
  shoes: [
    { icon: "sneaker", title: "Sneaker Deep Clean", body: "Uppers, midsoles, outsoles, laces and insoles — cleaned by hand with pH-balanced solutions.", meta: "From $25.00 / pair" },
    { icon: "shield", title: "Leather Care", body: "Cleaning, conditioning and polishing for leather shoes, boots and loafers to keep them supple.", meta: "From $30.00 / pair" },
    { icon: "brush", title: "Suede & Nubuck", body: "Dry and low-moisture techniques that lift dirt without flattening the nap or causing water marks.", meta: "From $35.00 / pair" },
    { icon: "sun", title: "Sole Unyellowing", body: "Oxidation treatment that brings yellowed rubber and icy soles back to their original tone.", meta: "From $20.00 / pair" },
    { icon: "sparkles", title: "Repaint & Restoration", body: "Colour touch-ups, midsole repaints and scuff repair to bring worn favourites back to life.", meta: "From $45.00 / pair" },
    { icon: "wind", title: "Deodorise & Protect", body: "Our Fresh Step odour-neutralising mist plus an optional water and stain repellent coating.", meta: "Add-on from $5.00" },
  ],
};

export const steps: { icon: IconName; title: string; body: string }[] = [
  { icon: "calendar", title: "Book a pickup", body: "Choose a time slot online or by phone. Same-day pickups are available before noon." },
  { icon: "bag", title: "We collect", body: "Our driver collects your bag and shoes, tags each item and logs its condition with photos." },
  { icon: "clipboard", title: "Expert cleaning", body: "Items go to the right specialist station, then pass a two-point quality inspection." },
  { icon: "truck", title: "Delivered fresh", body: "Folded, hung or boxed — returned to your door at the time that suits you." },
];

export type PriceRow = { item: string; note?: string; price: string };

export const priceLists: { category: Category; title: string; subtitle: string; icon: IconName; rows: PriceRow[] }[] = [
  {
    category: "clothing",
    title: "Clothing",
    subtitle: "Laundry, dry cleaning & pressing",
    icon: "shirt",
    rows: [
      { item: "Wash & fold", note: "min. 10 lb", price: "$1.95 / lb" },
      { item: "Shirt — wash & press", price: "$3.50" },
      { item: "Trousers — dry clean", price: "$7.00" },
      { item: "Dress — dry clean", price: "from $12.00" },
      { item: "2-piece suit", price: "$16.00" },
      { item: "Coat or jacket", price: "from $18.00" },
      { item: "Comforter / duvet", price: "from $25.00" },
    ],
  },
  {
    category: "shoes",
    title: "Shoes",
    subtitle: "Cleaning, care & restoration",
    icon: "sneaker",
    rows: [
      { item: "Basic clean", note: "uppers & midsole", price: "$15.00" },
      { item: "Deep clean", note: "inside & out", price: "$25.00" },
      { item: "Leather care & conditioning", price: "$30.00" },
      { item: "Suede & nubuck", price: "$35.00" },
      { item: "Sole unyellowing", price: "$20.00" },
      { item: "Repaint & restoration", price: "from $45.00" },
      { item: "Add-ons", note: "deodorise · repel · laces", price: "from $4.00" },
    ],
  },
];

export const plan = {
  name: "Weekly Care Plan",
  description: "For busy households who want laundry off their list for good.",
  price: "$59",
  period: "/ month",
  features: [
    "30 lb wash & fold in your signature scent",
    "1 sneaker deep clean included",
    "Free weekly pickup & delivery",
    "15% off dry cleaning & pressing",
    "Pause or cancel anytime",
  ],
};

export type Scent = { id: string; name: string; notes: string; color: string; badge?: string };

export const scents: Scent[] = [
  { id: "fresh-linen", name: "Fresh Linen", notes: "Clean cotton, sea salt & white musk", color: "#3bb0d6", badge: "Most loved" },
  { id: "lavender-calm", name: "Lavender Calm", notes: "French lavender, chamomile & soft vanilla", color: "#8b74e0" },
  { id: "citrus-bloom", name: "Citrus Bloom", notes: "Bergamot, sweet orange & neroli", color: "#f2a93b" },
  { id: "fragrance-free", name: "Fragrance-Free", notes: "No added scent — ideal for sensitive skin & babywear", color: "#9aa6b8" },
];

export const features: { icon: IconName; title: string; body: string }[] = [
  { icon: "shield", title: "Fully insured handling", body: "Every item is tagged, tracked and covered from pickup to delivery." },
  { icon: "leaf", title: "Eco-conscious process", body: "Plant-based detergents, water-efficient machines and reusable garment bags." },
  { icon: "clock", title: "On-time, every time", body: "Live order updates by SMS, with a 2-hour delivery window you choose." },
];

export const reviews = [
  { quote: "My shirts come back crisp and smelling of Fresh Linen all week. The weekly plan has genuinely given me my Sundays back.", name: "Marco R.", role: "Weekly Care Plan member", hue: 182 },
  { quote: "I sent in a pair of yellowed sneakers I'd almost thrown out. They came back looking box-fresh — and they sent before and after photos.", name: "Aisha T.", role: "Sneaker restoration", hue: 222 },
  { quote: "Reliable, on time and careful with delicate fabrics. They called before treating a stain on a silk dress — that's real professionalism.", name: "Dana L.", role: "Dry cleaning customer", hue: 32 },
];

export const faqs = [
  { q: "How does pickup and delivery work?", a: `Book a 2-hour window online. Our driver collects your items in a reusable bag (shoes go in individual protective sleeves) and returns them at your chosen delivery time. It's free on orders over ${site.freeDeliveryMin}.` },
  { q: "How long does it take?", a: "Wash & fold and pressing are usually ready in 24–48 hours. Dry cleaning and standard shoe cleaning take 48 hours. Restoration and repaint work can take 3–5 days depending on the condition." },
  { q: "Can I choose a scent — or skip it?", a: "Yes. Pick Fresh Linen, Lavender Calm or Citrus Bloom when you book, or choose Fragrance-Free. All our scents are hypoallergenic and gentle on sensitive skin, and you can change your preference on any order." },
  { q: "Which shoes can you clean?", a: "Sneakers, canvas, leather, suede, nubuck, knit and most boots. We'll assess each pair on arrival and let you know if anything needs special treatment or isn't suitable for cleaning." },
  { q: "What if something gets damaged or lost?", a: "Every item is tagged and photographed at intake and is covered by our insurance while in our care. In the rare event of an issue, we'll make it right under our satisfaction guarantee." },
  { q: "Can you remove every stain?", a: "We treat every stain we find, and most come out completely. Some older or set-in stains may only lighten — we'll always tell you before using stronger treatments on delicate fabrics." },
];

export const timeSlots = [
  "8:00 – 10:00 AM",
  "10:00 AM – 12:00 PM",
  "12:00 – 2:00 PM",
  "2:00 – 4:00 PM",
  "4:00 – 6:00 PM",
  "6:00 – 8:00 PM",
];

export const footerLinks = [
  {
    title: "Clothing",
    links: [
      { label: "Wash & fold", href: "#clothing-care" },
      { label: "Dry cleaning", href: "#clothing-care" },
      { label: "Pressing & ironing", href: "#clothing-care" },
      { label: "Bedding & linens", href: "#clothing-care" },
    ],
  },
  {
    title: "Shoes",
    links: [
      { label: "Sneaker deep clean", href: "#shoe-care" },
      { label: "Leather care", href: "#shoe-care" },
      { label: "Suede & nubuck", href: "#shoe-care" },
      { label: "Restoration", href: "#shoe-care" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How it works", href: "#process" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#book" },
    ],
  },
];
