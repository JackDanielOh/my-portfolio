import PortfolioLayout from '@/components/templates/PortfolioLayout';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  return <PortfolioLayout data={portfolioData} />;
}
