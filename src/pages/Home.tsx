import PageWrapper from '@/components/layout/PageWrapper';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import FeaturedFaculty from '@/components/home/FeaturedFaculty';
import ResearchHighlight from '@/components/home/ResearchHighlight';
import ProgramsPreview from '@/components/home/ProgramsPreview';
import NewsPreview from '@/components/home/NewsPreview';
import AlumniQuote from '@/components/home/AlumniQuote';

export default function Home() {
  return (
    <PageWrapper fullWidthHero>
      <HeroSection />
      <StatsSection />
      <AboutSnippet />
      <FeaturedFaculty />
      <ResearchHighlight />
      <ProgramsPreview />
      <NewsPreview />
      <AlumniQuote />
    </PageWrapper>
  );
}
