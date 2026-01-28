import Button from "@/components/Button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary text-neutral py-20 px-6 text-center">
        <h1 className="text-4xl font-bold font-serif mb-4">Contact Us</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Ready to start your bespoke journey? Get in touch to schedule your private consultation.
        </p>
      </section>

      <div className="container mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-8 font-serif">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Visit Our Showroom</h3>
                  <p className="text-muted">
                    123 Tailor's Lane, Fashion District<br />
                    New York, NY 10018
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Call Us</h3>
                  <p className="text-muted">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-sm text-muted/60 mt-1">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Email Us</h3>
                  <p className="text-muted">
                    consultations@masterline.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">Opening Hours</h3>
                  <ul className="text-muted space-y-1">
                    <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span>10:00 - 19:00</span></li>
                    <li className="flex justify-between w-48"><span>Saturday:</span> <span>10:00 - 17:00</span></li>
                    <li className="flex justify-between w-48"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral p-8 rounded-sm shadow-lg border border-muted/10">
            <h2 className="text-3xl font-bold text-secondary mb-6 font-serif">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-background border border-muted/20 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-background border border-muted/20 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">Subject</label>
                 <select id="subject" className="w-full px-4 py-3 bg-background border border-muted/20 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-secondary">
                   <option>General Inquiry</option>
                   <option>Book Appointment</option>
                   <option>Existing Order Status</option>
                   <option>Wedding Consultation</option>
                 </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-muted/20 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
