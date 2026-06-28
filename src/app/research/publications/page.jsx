'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { publications, atAGlance } from '@/data/researchData';

const tabs = ['All', 'Journal', 'Books Chapters', 'Reports'];

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState('All');

  const filtered = activeTab === 'All'
    ? publications
    : publications.filter((p) => p.category === activeTab);

  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" style={{ color: '#1b2a38' }} className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/research" style={{ color: '#1b2a38' }} className="hover:underline">Research</Link>
          <span className="mx-1">/</span>
          <span>Publication</span>
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-2" style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
          Publication
        </h2>
        <p className="text-sm leading-relaxed mb-6 max-w-2xl" style={{ fontFamily: "'Lora', serif", color: '#1b2a38AA' }}>
          My publication portfolio reflects interdisciplinary contributions across Artificial Intelligence, Machine Learning, Health Informatics, Information Systems, Software Engineering, and Responsible Technology.
          My research has been published in peer-reviewed journals and international scholarly platforms with emphasis on innovation, practical application, and societal impact.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{
                backgroundColor: activeTab === tab ? '#12355B' : '#ffffff',
                color: activeTab === tab ? '#ffffff' : '#1b2a38',
                fontFamily: "'Lora', serif",
                border: '1px solid #12355B22',
              }}
              className="text-xs px-4 py-2 rounded transition-all duration-200">
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
            <h4 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
                Coming soon!
                </h4>
          {/* Publications List */}
          <div className="flex-1 space-y-3">
            {filtered.map((pub) => (
              <div key={pub.id} className="p-4 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold mb-1" style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
                      {pub.title}
                    </p>
                    <p className="text-xs mb-0.5" style={{ fontFamily: "'Lora', serif", color: '#1b2a38AA' }}>
                      {pub.authors}
                    </p>
                    <p className="text-xs" style={{ fontFamily: "'Lora', serif", color: '#2a9d8f' }}>
                      {pub.journal} · {pub.year}
                    </p>
                  </div>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#2a9d8f' }} className="flex-shrink-0 hover:opacity-70 mt-0.5">
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* At a Glance Sidebar */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="rounded-lg p-5 sticky top-20" style={{ backgroundColor: '#ffffff' }}>
              <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
                At a Glance
              </h4>
              <div className="space-y-3 mb-5">
                {atAGlance.map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-xs" style={{ fontFamily: "'Lora', serif", color: '#1b2a38AA' }}>{item.label}</span>
                    <span className="text-sm font-bold" style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <a href="/cv.pdf" download className="block text-center text-xs py-2 rounded w-full hover:opacity-90"
                style={{ backgroundColor: '#12355B', color: '#ffffff', fontFamily: "'Lora', serif" }}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}