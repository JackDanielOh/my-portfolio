"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import {
  Language,
  languages,
  LanguageKey,
  defaultLanguage,
} from "@/data/languages";

interface LanguageContextType {
  language: Language;
  currentLocale: LanguageKey;
  switchLanguage: (locale: LanguageKey) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Extract locale from pathname to avoid hydration mismatch
  const localeFromPath = pathname.split("/")[1] as LanguageKey;
  const currentLocale = ["en", "ko"].includes(localeFromPath)
    ? localeFromPath
    : defaultLanguage;

  const [language, setLanguage] = useState<Language>(languages[currentLocale]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setLanguage(languages[currentLocale]);
  }, [currentLocale]);

  const switchLanguage = (newLocale: LanguageKey) => {
    setIsLoading(true);
    const segments = pathname.split("/");
    segments[1] = newLocale; // Replace the locale segment
    const newPath = segments.join("/");
    router.push(newPath);

    // Reset loading after a short delay
    setTimeout(() => setIsLoading(false), 100);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        currentLocale,
        switchLanguage,
        isLoading,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
