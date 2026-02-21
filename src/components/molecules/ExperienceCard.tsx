"use client";

import { useLanguage } from "@/contexts/LanguageContext";

interface Phase {
  phaseLabel: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

interface ExperienceCardProps {
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

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  highlight1,
  highlight2,
  highlight3,
  technologies = [],
  phases,
}: ExperienceCardProps) {
  const { language: lang } = useLanguage();
  const hasPhases = phases && phases.length > 0;

  return (
    <div className="bg-stone-800/60 backdrop-blur-sm rounded-3xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-target">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-green-500 font-medium">{company}</p>
        </div>
        <span className="text-sm text-green-200 bg-stone-700/80 border border-stone-600/50 px-3 py-1 rounded-full">
          {period}
        </span>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      {hasPhases ? (
        <div className="space-y-5">
          {phases!.map((phase, phaseIndex) => (
            <div
              key={phaseIndex}
              className="border-l-2 border-green-600/50 pl-4 py-1"
            >
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-semibold text-white">
                  {phase.phaseLabel}
                </h4>
                <span className="text-xs text-green-200 bg-stone-700/60 border border-stone-600/40 px-2 py-0.5 rounded-full">
                  {phase.period}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2 leading-relaxed">
                {phase.description}
              </p>
              <ul className="text-gray-300 text-sm mb-2 space-y-1">
                {phase.highlights.map((h, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {phase.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {(highlight1 || highlight2 || highlight3) && (
            <ul className="text-gray-300 mb-4 space-y-2">
              {highlight1 && (
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{highlight1}</span>
                </li>
              )}
              {highlight2 && (
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{highlight2}</span>
                </li>
              )}
              {highlight3 && (
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>{highlight3}</span>
                </li>
              )}
            </ul>
          )}
          {technologies.length > 0 && (
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
          )}
        </>
      )}
    </div>
  );
}
