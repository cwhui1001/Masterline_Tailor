import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
  href?: string;
}

export default function ServiceCard({ title, description, icon: Icon, price, href = '/services' }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2px] bg-neutral border border-muted/20 p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-accent">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-neutral transition-colors duration-500">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 className="mb-3 text-2xl font-bold font-serif text-secondary group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="mb-6 text-muted leading-relaxed">
        {description}
      </p>
      {price && (
        <p className="mb-6 text-2xl font-semibold text-accent font-serif italic">
          {price}
        </p>
      )}
      <Link href={href} className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wide group-hover:underline decoration-accent decoration-2 underline-offset-4">
        Learn More &rarr;
      </Link>
      
      {/* Decorative accent line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </div>
  );
}
