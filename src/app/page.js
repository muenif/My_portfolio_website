import Hero from '@/components/Hero';
import ExploreSection from '@/components/ExploreSection';

export const metadata = {
  title: 'Dr. Faith Mueni | Home',
  description:
    'Welcome to the official academic portfolio of Dr. Faith Mueni — researcher, educator, and scholar.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExploreSection />
    </>
  );
}