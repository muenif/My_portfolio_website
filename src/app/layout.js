import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dr. Faith Mueni | Academic Portfolio',
  description:
    'Official academic portfolio of Dr. Faith Mueni — researcher, educator, and scholar. Explore research, publications, grants, and teaching.',
  keywords: ['Dr Faith Mueni', 'research', 'academic', 'publications', 'teaching'],
  openGraph: {
    title: 'Dr. Faith Mueni | Academic Portfolio',
    description:
      'Explore the research, publications, and academic contributions of Dr. Faith Mueni.',
    url: 'https://drfaithmueni.com',
    siteName: 'Dr. Faith Mueni',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
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