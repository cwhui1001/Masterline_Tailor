import Image from "next/image";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Scissors, Ruler, Shirt } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Bespoke Suit Fabric"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-neutral">
          <h1 className="mb-6 max-w-4xl text-5xl font-bold font-serif leading-tight tracking-tight sm:text-7xl animate-in fade-in zoom-in duration-1000">
            Precision in Every Stitch. <br />
            <span className="text-accent italic">Elegance</span> in Every Detail.
          </h1>
          <p className="mb-10 max-w-2xl text-lg font-light tracking-wide text-neutral/80 sm:text-xl animate-in slide-in-from-bottom-5 duration-1000 delay-300">
            Experience the art of bespoke tailoring. Crafted exclusively for you, 
            defining your style with timeless sophistication.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row animate-in slide-in-from-bottom-5 duration-1000 delay-500">
            <Button href="/contact" size="lg">
              Book a Consultation
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-neutral text-neutral hover:bg-neutral hover:text-secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Intro / Value Prop */}
      <section className="py-20 px-6 bg-neutral">
        <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-4xl font-bold font-serif text-secondary">
              Where Tradition Meets <span className="text-primary">Modern Style</span>
            </h2>
            <p className="mb-6 text-lg text-muted leading-relaxed">
              At Masterline Tailor, we believe that a suit is more than just clothing—it's a statement. 
              Our master tailors combine generations of craftsmanship with contemporary aesthetics 
              to create garments that fit your body and your lifestyle perfectly.
            </p>
            <ul className="mb-8 space-y-4">
              {['Hand-stitched details', 'Premium Italian fabrics', 'Perfect fit guarantee', 'Personalized styling'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-secondary font-medium">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="secondary">
              Read Our Story
            </Button>
          </div>
          <div className="relative h-[500px] w-full rounded-sm overflow-hidden shadow-2xl">
             <Image
              src="/images/about.png"
              alt="Master Tailor at Work"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6 bg-secondary text-neutral">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold font-serif text-neutral">Our Expertise</h2>
            <div className="mx-auto h-1 w-24 bg-accent" />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ServiceCard 
              title="Bespoke Suits" 
              description="Fully canvassed, hand-cut, and tailored to your exact measurements for an impeccable fit and silhouette."
              icon={Scissors}
              href="/services"
            />
            <ServiceCard 
              title="Custom Shirts" 
              description="Choose from hundreds of premium cottons and collar styles to create the perfect shirt for any occasion."
              icon={Ruler}
              href="/services"
            />
             <ServiceCard 
              title="Expert Alterations" 
              description="Revitalize your wardrobe with our precision alteration services, breathing new life into your favorite garments."
              icon={Shirt} // Using Shirt as placeholder for alteration/garment
              href="/services"
            />
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-neutral text-center">
        <h2 className="mb-6 text-4xl font-bold font-serif">Ready to Elevate Your Style?</h2>
        <p className="mb-10 text-xl text-neutral/90 max-w-2xl mx-auto">
          Book your private consultation today and start the journey to your perfect garment.
        </p>
        <Button href="/contact" size="lg" className="bg-neutral text-primary hover:bg-neutral/90 border-transparent shadow-xl">
          Schedule Appointment
        </Button>
      </section>
    </div>
  );
}
