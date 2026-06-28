import Link from 'next/link';
import { researchInterests, currentResearchThemes } from '@/data/researchData';

export const metadata = {
  title: 'Dr. Faith Mueni | Research Profile',
  description: 'Research interests and current research themes of Dr. Faith Mueni.',
};

export default function ResearchProfilePage() {
  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" style={{ color: '#1b2a38' }} className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/research" style={{ color: '#1b2a38' }} className="hover:underline">Research</Link>
          <span className="mx-1">/</span>
          <span>Research Profile</span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
          Research Profile
        </h2>
        <p className="text-sm leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: "'Lora', serif", color: '#1b2a38AA' }}>
         My research explores how digital technologies can be responsibly designed and applied to improve decision-making, service delivery, and societal outcomes.
My work integrates Artificial Intelligence, Health Informatics, Data Governance, and emerging digital technologies to create practical and scalable solutions.
        </p>

        <h3 className="text-xl font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1b2a38' }}>
          Research Interests
        </h3>
        <div className="flex flex-wrap gap-2 mb-10">
          {researchInterests.map((interest) => (
            <span key={interest} className="text-xs px-3 py-2 rounded-full"
              style={{ backgroundColor: '#ffffff', color: '#12355B', fontFamily: "'Lora', serif", border: '1px solid #12355B22' }}>
              {interest}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-medium mb-5" style={{ fontFamily: "'Playfair Display', serif", color: '#1b2a38' }}>
          Current Research Themes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {currentResearchThemes.map((theme) => (
            <div key={theme.id} className="rounded-lg p-5" style={{ backgroundColor: '#ffffff' }}>
              <div className="w-8 h-1 rounded mb-3" style={{ backgroundColor: '#2a9d8f' }} />
              <h4 className="text-base font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#12355B' }}>
                {theme.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ fontFamily: "'Lora', serif", color: '#1b2a38AA' }}>
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}