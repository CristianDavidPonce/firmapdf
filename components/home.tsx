'use client';

import Hero from './home/Hero';
import Features from './home/Features';
import HowItWorks from './home/HowItWorks';
import SigningModes from './home/SigningModes';
import Requirements from './home/Requirements';
import Download from './home/Download';
import FAQ from './home/FAQ';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <SigningModes />
      <Requirements />
      <Download />
      <FAQ />
    </div>
  );
}
