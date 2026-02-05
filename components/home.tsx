'use client';

import Header from './home/Header';
import Hero from './home/Hero';
import Features from './home/Features';
import HowItWorks from './home/HowItWorks';
import SigningModes from './home/SigningModes';
import Security from './home/Security';
import Requirements from './home/Requirements';
import Download from './home/Download';
import FAQ from './home/FAQ';
import Footer from './home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <SigningModes />
      <Security />
      <Requirements />
      <Download />
      <FAQ />
      <Footer />
    </div>
  );
}
