import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.drfaithmueni.com'),
  title: {
    default: 'Dr. Faith Mueni Musyoka | Senior Lecturer & Researcher',
    template: '%s | Dr. Faith Mueni Musyoka',
  },
  description:
    'Official academic portfolio of Dr. Faith Mueni Musyoka — Senior Lecturer in Computing & Information Technology, researcher in AI, Health Informatics, and Data Governance at University of Embu, Kenya.',
  keywords: [
    'Dr Faith Mueni',
    'Faith Mueni Musyoka',
    'University of Embu',
    'Artificial Intelligence Kenya',
    'Health Informatics',
    'Data Governance',
    'Machine Learning Kenya',
    'Senior Lecturer Computing',
    'IoT Kenya',
    'Research Kenya',
    'Academic Portfolio Kenya',
    'Computing Information Technology',
  ],
  authors: [{ name: 'Dr. Faith Mueni Musyoka' }],
  creator: 'Dr. Faith Mueni Musyoka',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://www.drfaithmueni.com',
    siteName: 'Dr. Faith Mueni Musyoka',
    title: 'Dr. Faith Mueni Musyoka | Senior Lecturer & Researcher',
    description:
      'Explore the research, publications, grants, and academic contributions of Dr. Faith Mueni Musyoka — Senior Lecturer at University of Embu, Kenya.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Faith Mueni Musyoka — Senior Lecturer & Researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Faith Mueni Musyoka | Senior Lecturer & Researcher',
    description:
      'Explore the research, publications, grants, and academic contributions of Dr. Faith Mueni Musyoka.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}