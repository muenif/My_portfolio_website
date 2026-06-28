'use client';

import { useState } from 'react';

export default function JourneySection({ journeyParagraphs }) {
  const [expanded, setExpanded] = useState(false);

  const mobileParagraphs = expanded
    ? journeyParagraphs
    : journeyParagraphs.slice(0, 1);

  return (
    <>
      <h3
        className="text-2xl font-medium mb-3 text-center md:text-left"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: '#1b2a38',
        }}
      >
        My Journey
      </h3>

      {/* Desktop */}
      <div className="hidden md:block">
        {journeyParagraphs.map((para, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed mb-3"
            style={{
              fontFamily: "'Lora', serif",
              color: '#1b2a38',
            }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        {mobileParagraphs.map((para, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed mb-3"
            style={{
              fontFamily: "'Lora', serif",
              color: '#1b2a38',
            }}
          >
            {para}
          </p>
        ))}

        {journeyParagraphs.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#2a9d8f] font-medium text-sm hover:underline"
          >
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </>
  );
}