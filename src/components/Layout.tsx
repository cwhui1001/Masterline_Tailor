import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

export default function Layout({ children, pageTitle = 'Masterline Tailor' }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
      <Head>
        <title>{pageTitle} | Bespoke Menswear</title>
        <meta name="description" content="Premium bespoke tailoring for the modern gentleman." />
      </Head>
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
