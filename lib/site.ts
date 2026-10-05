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
  phoneHref: "contact:+635550123456",
  email: "contact@scentedbubbles.co",
  address: ["Tarlac City, Tarlac, Philippines"],
  hours: ["Mon–Fri 7:00 AM – 8:00 PM", "Sat–Sun 8:00 AM – 6:00 PM"],
  freeDeliveryMin: "₱30",
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

export const shoeComparison = {
  before: {
    src: "/images/shoe-before.jpg",
    alt: "White Nike sneakers with mud and dirt along the soles, worn outdoors",
    photographer: "Justus Menke",
    source: "https://unsplash.com/photos/u1AjLF5GISQ",
    position: "50% 60%",
  },
  after: {
    src: "/images/shoe-after.jpg",
    alt: "A clean pair of white Nike Air Force 1 sneakers on a warm neutral background",
    photographer: "Brian Hall",
    source: "https://unsplash.com/photos/x5aavOm7PFc",
    position: "50% 80%",
  },
  caption: "White leather sneakers · Deep cleaning & sole care",
  note: "Illustrative comparison using different pairs. Photos from Unsplash.",
};

export const stats = [
  { value: 48000, suffix: "+", label: "Garments cleaned" },
  { value: 9500, suffix: "+", label: "Pairs of shoes restored" },
  { value: 48, suffix: "h", label: "Standard turnaround" },
  { value: 100, suffix: "%", label: "Satisfaction guarantee" },
];

export type Service = {
  icon: IconName;
  title: string;
  label: string;
  body: string;
  price: { label: string; amount: string; unit?: string };
};
export type Category = "clothing" | "shoes";

export const services: Record<Category, Service[]> = {
  clothing: [
    { icon: "washer", title: "Wash & Fold", label: "Everyday essentials", body: "Sorted by colour and fabric, gently washed and neatly folded. Fresh laundry, finished in your signature scent.", price: { label: "From", amount: "₱1.95", unit: "/ lb" } },
    { icon: "hanger", title: "Dry Cleaning", label: "Tailored care", body: "Specialist cleaning for suits, coats and wool. Gentle on fabrics that need a little extra care.", price: { label: "From", amount: "₱7.00", unit: "/ item" } },
    { icon: "iron", title: "Pressing & Ironing", label: "The finishing touch", body: "Crisp shirts, smooth trousers and beautifully pressed dresses. Returned on hangers, ready to wear.", price: { label: "From", amount: "₱3.50", unit: "/ item" } },
    { icon: "bed", title: "Bedding & Linens", label: "A fresher home", body: "A thorough wash for duvets, sheets and curtains. Cleaned and sanitised for your next cosy night in.", price: { label: "From", amount: "₱25.00", unit: "/ item" } },
    { icon: "feather", title: "Delicates & Silk", label: "A gentler approach", body: "Careful hand-washing for silk, lace and cashmere. Every piece treated according to its care label.", price: { label: "From", amount: "₱9.00", unit: "/ item" } },
    { icon: "droplet", title: "Stain Treatment", label: "Part of our process", body: "Targeted attention for coffee, wine, grease and ink. We treat the spots before the wash begins.", price: { label: "With every order", amount: "Included" } },
  ],
  shoes: [
    { icon: "sneaker", title: "Sneaker Deep Clean", label: "Fresh from every angle", body: "Uppers, soles, laces and insoles. Every part cleaned by hand with gentle, pH-balanced solutions.", price: { label: "From", amount: "₱25.00", unit: "/ pair" } },
    { icon: "shield", title: "Leather Care", label: "Condition & revive", body: "Cleaning, conditioning and polishing for leather shoes, boots and loafers. Keep your favourites supple.", price: { label: "From", amount: "₱30.00", unit: "/ pair" } },
    { icon: "brush", title: "Suede & Nubuck", label: "Texture matters", body: "Specialist, low-moisture care that lifts dirt while protecting the soft texture of suede and nubuck.", price: { label: "From", amount: "₱35.00", unit: "/ pair" } },
    { icon: "sun", title: "Sole Unyellowing", label: "Brighter steps", body: "Targeted oxidation treatment to help yellowed rubber and icy soles return to their original tone.", price: { label: "From", amount: "₱20.00", unit: "/ pair" } },
    { icon: "sparkles", title: "Repaint & Restoration", label: "Another chapter", body: "Colour touch-ups, midsole repaints and scuff repair. Thoughtful restoration for well-loved pairs.", price: { label: "From", amount: "₱45.00", unit: "/ pair" } },
    { icon: "wind", title: "Deodorise & Protect", label: "Stay fresh for longer", body: "Fresh Step odour-neutralising mist, with an optional water and stain repellent finish.", price: { label: "Add-on from", amount: "₱5.00" } },
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
      { item: "Wash & fold", note: "min. 10 lb", price: "₱1.95 / lb" },
      { item: "Shirt — wash & press", price: "₱3.50" },
      { item: "Trousers — dry clean", price: "₱7.00" },
      { item: "Dress — dry clean", price: "from ₱12.00" },
      { item: "2-piece suit", price: "₱16.00" },
      { item: "Coat or jacket", price: "from ₱18.00" },
      { item: "Comforter / duvet", price: "from ₱25.00" },
    ],
  },
  {
    category: "shoes",
    title: "Shoes",
    subtitle: "Cleaning, care & restoration",
    icon: "sneaker",
    rows: [
      { item: "Basic clean", note: "uppers & midsole", price: "₱15.00" },
      { item: "Deep clean", note: "inside & out", price: "₱25.00" },
      { item: "Leather care & conditioning", price: "₱30.00" },
      { item: "Suede & nubuck", price: "₱35.00" },
      { item: "Sole unyellowing", price: "₱20.00" },
      { item: "Repaint & restoration", price: "from ₱45.00" },
      { item: "Add-ons", note: "deodorise · repel · laces", price: "from ₱4.00" },
    ],
  },
];

export const plan = {
  name: "Weekly Care Plan",
  description: "For busy households who want laundry off their list for good.",
  price: "₱59",
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
  { quote: "My shirts come back crisp and smelling of Fresh Linen all week. The weekly plan has genuinely given me my Sundays back.", name: "Jehnz E.", role: "Weekly Care Plan member", hue: 182 },
  { quote: "I sent in a pair of yellowed sneakers I'd almost thrown out. They came back looking box-fresh — and they sent before and after photos.", name: "Wilson T.", role: "Sneaker restoration", hue: 222 },
  { quote: "Reliable, on time and careful with delicate fabrics. They called before treating a stain on a silk dress — that's real professionalism.", name: "Joe Binay", role: "Dry cleaning customer", hue: 32 },
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
