"use client";

import ProjectCard from "@/components/molecules/ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { language: lang } = useLanguage();

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          {lang.projects.heading}
        </h2>
        <p className="text-gray-300">{lang.projects.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            year={project.year}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </section>
  );
}
