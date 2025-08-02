"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  highlight1: string;
  highlight2: string;
  highlight3: string;
  technologies: string[];
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  highlight1,
  highlight2,
  highlight3,
  technologies,
}: ExperienceCardProps) {
  const { language: lang } = useLanguage();

  return (
    <div className="bg-stone-800/60 backdrop-blur-sm rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-target">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-green-500 font-medium">{company}</p>
        </div>
        <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
          {period}
        </span>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      {/* Key Achievements */}
      <ul className="text-gray-300 mb-4 space-y-2">
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>{highlight1}</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>{highlight2}</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-500 mr-2">•</span>
          <span>{highlight3}</span>
        </li>
      </ul>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
