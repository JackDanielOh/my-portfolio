import PortfolioLayout from "@/components/templates/PortfolioLayout";
import { portfolioData } from "@/data/portfolio";
import TargetCursor from "@/components/animations/TargetCursor";

export default function Home() {
  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <PortfolioLayout data={portfolioData} />
    </>
  );
}
