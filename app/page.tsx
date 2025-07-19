'use client';

import { Contact } from '@/components/contact/ui/Contact';
import { Skills } from '@/components/skills/ui/Skills';
import { About } from '@/components/about/ui/About';
import { Experience } from '@/components/experience/ui/Experience';
import { Navigation } from '@/components/navigation/ui/Navigation';
import { Hero } from '@/components/hero/ui/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}