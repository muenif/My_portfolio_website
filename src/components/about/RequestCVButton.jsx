'use client';

import { Mail } from 'lucide-react';

const TO = 'faithmueni24@gmail.com';
const SUBJECT = 'CV Request | Dr. Faith Mueni';
const BODY = 'Dear Dr. Faith Mueni,\n\nI am writing to request a copy of your CV.\n\nKind regards,';

const GMAIL_WEB_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  TO
)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

const MAILTO_URL = `mailto:${TO}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(
  BODY
)}`;

export default function RequestCVButton() {
  const handleClick = (e) => {
    e.preventDefault();

    const isMobile =
      typeof navigator !== 'undefined' &&
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Opens the phone's native mail app with the message pre-composed
      window.location.href = MAILTO_URL;
    } else {
      // Opens Gmail web compose in a new tab on desktop
      window.open(GMAIL_WEB_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <a
      href={MAILTO_URL}
      onClick={handleClick}
      style={{ backgroundColor: '#2a9d8f', color: '#ffffff', fontFamily: "'Lora', serif" }}
      className="flex items-center gap-2 text-sm px-4 py-2 rounded hover:opacity-90 transition-all"
    >
      <Mail size={14} />
      Request CV
    </a>
  );
}