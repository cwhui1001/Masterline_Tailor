import Image from "next/image";
import Button from "@/components/Button";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary py-20 px-6 text-center">
        <h1 className="text-4xl font-bold font-serif text-neutral mb-4">Our Legacy</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Crafting excellence since 1985. The story behind Masterline Tailor.
        </p>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[600px] w-full">
            <Image
              src="/images/about.png"
              alt="Tailor Working"
              fill
              className="object-cover rounded-sm shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 h-48 w-48 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 h-48 w-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-secondary mb-6 font-serif">A Tradition of <span className="text-primary">Excellence</span></h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                Founded over three decades ago, Masterline Tailor began with a simple philosophy: 
                <span className="text-secondary font-medium"> no two individuals are alike, and neither should their clothes be.</span>
              </p>
              <p>
                What started as a small workshop has grown into a destination for discerning gentlemen who seek 
                uncompromising quality. We adhere to the time-honored traditions of Savile Row bespoke tailoring, 
                employing techniques passed down through generations of master cutters.
              </p>
              <p>
                Every garment that leaves our shop is a masterpiece of construction. From the initial measurement 
                to the final hand-stitch, we obsess over every detail to ensure your garment is not just worn, 
                but experienced.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-accent mb-2">35+</h3>
                <p className="text-secondary font-medium">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-accent mb-2">5000+</h3>
                <p className="text-secondary font-medium">Suits Crafted</p>
              </div>
            </div>

            <div className="mt-10">
              <Button href="/contact">Visit Our Workshop</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-neutral border-t border-muted/10">
        <div className="container mx-auto text-center">
           <h2 className="text-3xl font-bold text-secondary mb-12 font-serif">The Bespoke Process</h2>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Consultation", desc: "We discuss your style, needs, and fabric preferences." },
               { step: "02", title: "Measurement", desc: "Over 30 precise body measurements are taken." },
               { step: "03", title: "Fittings", desc: "Intermediate fittings to refine the fit and silhouette." },
               { step: "04", title: "Delivery", desc: "The final garment is ready for you to wear with pride." },
             ].map((item) => (
               <div key={item.step} className="p-6 bg-background rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                 <span className="absolute top-0 right-0 text-6xl font-black text-muted/5 group-hover:text-primary/5 transition-colors">{item.step}</span>
                 <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                 <p className="text-muted relative z-10">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
