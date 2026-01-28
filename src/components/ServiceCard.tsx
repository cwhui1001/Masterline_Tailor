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
    <div className="group relative overflow-hidden rounded-sm bg-neutral border border-muted/10 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-accent/40">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-neutral transition-colors duration-300">
        <Icon size={28} />
      </div>
      <h3 className="mb-3 text-xl font-bold text-secondary">{title}</h3>
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
