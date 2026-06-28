import Link from 'next/link';
import { exploreCards } from '@/data/exploreCards';
import {
  FlaskConical,
  BookOpen,
  DollarSign,
  GraduationCap,
  Users,
  Mic2,
} from 'lucide-react';

const iconMap = {
  research: FlaskConical,
  publications: BookOpen,
  grants: DollarSign,
  teaching: GraduationCap,
  supervision: Users,
  conference: Mic2,
};

export default function ExploreSection() {
  return (
    <section style={{ backgroundColor: '#E8F3EA' }} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <h2 style={{ color: '#1b2a38' }} className="font-lora text-xs tracking-[0.25em] uppercase font-semibold mb-10">
          Explore
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {exploreCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <Link
                key={card.id}
                href={card.href}
                style={{ backgroundColor: '#ffffff' }}
                className="block rounded-lg p-5 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="mb-3">
                  {Icon && (
                    <Icon size={20} style={{ color: '#1b2a38' }} />
                  )}
                </div>
                <h3 style={{ color: '#1b2a38' }} className="font-lora text-sm font-semibold mb-1">
                  {card.title}
                </h3>
                <p style={{ color: '#1b2a3899' }} className="font-lora text-xs leading-relaxed">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link
            href="/research"
            style={{ backgroundColor: '#1b2a38' }}
            className="text-white font-lora text-sm px-10 py-3 rounded hover:opacity-90 transition-all duration-200 flex items-center gap-2"
          >
            View More
            <span style={{ color: '#2a9d8f' }} className="text-base">»</span>
          </Link>
        </div>

      </div>
    </section>
  );
}