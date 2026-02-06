import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  
  const baseStyles = "inline-flex items-center justify-center rounded-[2px] font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0";
  
  const variants = {
    primary: "bg-primary text-neutral hover:bg-primary/90 shadow-md hover:shadow-xl border border-transparent",
    secondary: "bg-secondary text-neutral hover:bg-secondary/90 shadow-md border border-transparent",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-neutral hover:border-primary",
    ghost: "text-primary hover:bg-primary/5",
  };
  
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
