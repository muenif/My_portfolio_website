'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroData } from '@/data/heroData';

export default function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section style={{ backgroundColor: '#031b33' }} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

          <div className="flex-shrink-0">
            <div
              className="w-[132px] h-[132px] rounded-full overflow-hidden"
              style={{ border: '2px solid #2a9d8f' }}
            >
              <Image
                src={heroData.image}
                alt={heroData.name}
                width={132}
                height={132}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1
              className="text-3xl md:text-4xl font-medium leading-snug mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#ffffff',
              }}
            >
              {heroData.heading}
            </h1>

            {/* Desktop */}
            <p
              className="hidden md:block text-base leading-8 max-w-2xl"
              style={{
                fontFamily: "'Lora', serif",
                color: 'rgba(255,255,255,0.80)',
              }}
            >
              {heroData.description}
            </p>

            {/* Mobile */}
            <div
              className="md:hidden"
              style={{
                fontFamily: "'Lora', serif",
                color: 'rgba(255,255,255,0.80)',
              }}
            >
              <p className="text-base leading-7 whitespace-pre-line">
                {expanded
                  ? heroData.description
                  : `${heroData.description.slice(0, 220)}...`}
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-3 text-[#2a9d8f] font-medium hover:underline"
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
              {heroData.buttons.map((btn) => (
                <Link
                  key={btn.label}
                  href={btn.href}
                  style={
                    btn.variant === 'filled'
                      ? {
                          backgroundColor: '#2a9d8f',
                          color: '#ffffff',
                          fontFamily: "'Lora', serif",
                          fontSize: '14px',
                          padding: '10px 24px',
                          borderRadius: '4px',
                          textDecoration: 'none',
                          display: 'inline-block',
                        }
                      : {
                          border: '1px solid #ffffff',
                          color: '#ffffff',
                          fontFamily: "'Lora', serif",
                          fontSize: '14px',
                          padding: '10px 24px',
                          borderRadius: '4px',
                          textDecoration: 'none',
                          display: 'inline-block',
                        }
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}