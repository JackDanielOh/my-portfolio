"use client";

import ExperienceCard from "@/components/molecules/ExperienceCard";
import { useLanguage } from "@/contexts/LanguageContext";

interface Phase {
  phaseLabel: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlight1?: string;
  highlight2?: string;
  highlight3?: string;
  technologies?: string[];
  phases?: Phase[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  const { language: lang } = useLanguage();

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          {lang.experience.heading}
        </h2>
        <p className="text-gray-300">{lang.experience.description}</p>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            description={experience.description}
            highlight1={experience.highlight1}
            highlight2={experience.highlight2}
            highlight3={experience.highlight3}
            technologies={experience.technologies}
            phases={experience.phases}
          />
        ))}
      </div>
    </section>
  );
}
