import ExperienceCard from "@/components/molecules/ExperienceCard";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Work Experience</h2>
        <p className="text-gray-300">
          My professional journey and contributions
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            description={experience.description}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </section>
  );
}
