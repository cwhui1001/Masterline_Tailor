import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { Scissors, Ruler, Shirt, ShoppingBag, Watch, Gem } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Bespoke Suiting",
      desc: "The pinnacle of tailoring. Hand-crafted from scratch to your exact specifications using the world's finest fabrics.",
      icon: Scissors,
      price: "From $1,200",
    },
    {
      title: "Made-to-Measure",
      desc: "Customized suits based on our house patterns, adjusted to your measurements for a superior fit compared to off-the-rack.",
      icon: Ruler,
      price: "From $800",
    },
    {
      title: "Custom Shirts",
      desc: "Perfectly fitting shirts with your choice of collar, cuff, and monogram. A wardrobe essential.",
      icon: Shirt,
      price: "From $150",
    },
    {
      title: "Wedding Attire",
      desc: "Look your absolute best on your special day. Tuxedos, morning suits, and groomsmen packages available.",
      icon: Gem,
      price: "Consultation",
    },
    {
      title: "Alterations & Repairs",
      desc: "Expert resizing, relining, and repairs for your existing wardrobe. We treat every garment with care.",
      icon: ShoppingBag,
      price: "Varies",
    },
    {
      title: "Accessories Styling",
      desc: "Complete your look with our curated selection of ties, pocket squares, and cufflinks.",
      icon: Watch,
      price: "Varies",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-neutral py-20 px-6 text-center">
        <h1 className="text-4xl font-bold font-serif mb-4">Our Services</h1>
        <p className="text-xl text-neutral/80 max-w-2xl mx-auto">
          Comprehensive tailoring solutions designed to meet the highest standards of quality and style.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="h-full">
                <ServiceCard
                  title={service.title}
                  description={service.desc}
                  icon={service.icon}
                  price={service.price}
                  href="/contact" // Direct to contact for booking
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section className="py-20 px-6 bg-secondary text-neutral">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-8">Premium Fabrics</h2>
          <p className="mb-12 text-muted max-w-3xl mx-auto">
            We partner with the world's most renowned mills to bring you an extensive collection of fabrics.
            From lightweight linens for summer to heavy craftsmanship wools for winter.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
            {/* Placeholders for Fabric Brand Logos - using text for now */}
            {['Holland & Sherry', 'Loro Piana', 'Ermenegildo Zegna', 'Scabal'].map(brand => (
              <div key={brand} className="flex items-center justify-center p-8 border border-neutral/20 rounded-sm">
                <span className="text-xl font-serif text-neutral/80">{brand}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/contact" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-secondary">
              View Fabric Swatches
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
