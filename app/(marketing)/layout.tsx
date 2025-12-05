import type { ReactNode } from 'react';

import Navbar from '@/components/navigation/Navbar';

import Footer from '@/components/navigation/Footer';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
