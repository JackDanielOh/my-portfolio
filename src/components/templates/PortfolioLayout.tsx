import ProfileCard from "@/components/molecules/ProfileCard";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import EducationSection from "@/components/organisms/EducationSection";
import FaultyTerminal from "@/components/backgrounds/FaultyTerminal";

interface PortfolioData {
  profile: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    skills: string[];
    contact: {
      email?: string;
      linkedin?: string;
      github?: string;
      website?: string;
    };
  };
  experiences: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    description?: string;
  }>;
  awards: Array<{
    title: string;
    issuer: string;
    date: string;
    description?: string;
  }>;
}

interface PortfolioLayoutProps {
  data: PortfolioData;
}

export default function PortfolioLayout({ data }: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen  relative">
      {/* Background Terminal */}
      <div className="fixed inset-0 z-0 opacity-20">
        <FaultyTerminal
          scale={1.6}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={0.8}
          flickerAmount={0.8}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.15}
          tint="#A7EF9E"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={true}
          brightness={0.6}
        />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Profile */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <ProfileCard
                  name={data.profile.name}
                  title={data.profile.title}
                  avatar={data.profile.avatar}
                  bio={data.profile.bio}
                  skills={data.profile.skills}
                  contact={data.profile.contact}
                />
              </div>
            </div>

            {/* Right Content - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <ExperienceSection experiences={data.experiences} />
              <ProjectsSection projects={data.projects} />
              <EducationSection
                education={data.education}
                awards={data.awards}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
