"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import Badge from "@/components/atoms/Badge";

const isPrivateGithubUrl = (url?: string) =>
  !url || url === "#" || url.trim() === "";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  year,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const { language: lang } = useLanguage();
  const [privateModalOpen, setPrivateModalOpen] = useState(false);
  const showPrivateModal = isPrivateGithubUrl(githubUrl);

  useEffect(() => {
    if (!privateModalOpen) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPrivateModalOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [privateModalOpen]);

  return (
    <div className="bg-stone-800/60 backdrop-blur-sm rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-target">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <Badge
            variant="primary"
            size="sm"
            className="bg-green-600/90 text-white font-semibold backdrop-blur-sm border border-green-500/30 shadow-lg"
          >
            {year}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="primary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700 transition-colors cursor-target"
            >
              {lang.projects.buttons.liveDemo}
            </a>
          )}
          {showPrivateModal ? (
            <button
              type="button"
              onClick={() => setPrivateModalOpen(true)}
              className="flex-1 border border-stone-600 text-green-200 text-center py-2 px-4 rounded hover:border-green-600/50 hover:bg-green-900/40 transition-colors cursor-target flex items-center justify-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16,18 22,12 16,6"></polyline>
                <polyline points="8,6 2,12 8,18"></polyline>
              </svg>
              {lang.projects.buttons.viewCode}
            </button>
          ) : (
            githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-stone-600 text-green-200 text-center py-2 px-4 rounded hover:border-green-600/50 hover:bg-green-900/40 transition-colors cursor-target flex items-center justify-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16,18 22,12 16,6"></polyline>
                  <polyline points="8,6 2,12 8,18"></polyline>
                </svg>
                {lang.projects.buttons.viewCode}
              </a>
            )
          )}
        </div>
      </div>

      {privateModalOpen && showPrivateModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setPrivateModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="private-repo-modal-title"
        >
          <div
            className="bg-stone-800/95 backdrop-blur-sm rounded-3xl shadow-lg border border-stone-600/50 p-6 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="private-repo-modal-title"
              className="text-lg font-semibold text-white mb-2"
            >
              {lang.projects.privateProjectModal.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              {lang.projects.privateProjectModal.message}
            </p>
            <button
              type="button"
              onClick={() => setPrivateModalOpen(false)}
              className="w-full bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700 transition-colors cursor-target"
            >
              {lang.projects.privateProjectModal.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
