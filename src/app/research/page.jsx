import Link from 'next/link';
import { FlaskConical, BookOpen, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Dr. Faith Mueni | Research',
  description: 'Research overview of Dr. Faith Mueni.',
};

const researchLinks = [
  { title: 'Research Profile', description: 'Focus areas, methods, and current projects', href: '/research/profile', icon: FlaskConical },
  { title: 'Publications', description: 'Journal articles, books, chapters, and reports', href: '/research/publications', icon: BookOpen },
  { title: 'Grants & Projects', description: 'Funded research and areas supported', href: '/research/grants', icon: DollarSign },
];

export default function ResearchPage() {
  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" style={{ color: '#1b2a38' }} className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <span>Research</span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-8" style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
          Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {researchLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} href={item.href} className="block rounded-lg p-6 hover:shadow-md transition-shadow" style={{ backgroundColor: '#ffffff' }}>
                <Icon size={20} style={{ color: '#2a9d8f' }} className="mb-3" />
                <h3 className="text-sm font-semibold mb-1" style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ fontFamily: "'Lora', serif", color: '#1b2a38AA' }}>{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}