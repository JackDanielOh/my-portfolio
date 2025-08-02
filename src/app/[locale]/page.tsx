import PortfolioLayout from "@/components/templates/PortfolioLayout";
import { getPortfolioData, LanguageKey } from "@/data/languages";
import TargetCursor from "@/components/animations/TargetCursor";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const portfolioData = getPortfolioData(locale as LanguageKey);

  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <PortfolioLayout data={portfolioData} />
    </>
  );
}
