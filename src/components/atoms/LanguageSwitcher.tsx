"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { currentLocale, switchLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const newLocale = currentLocale === "en" ? "ko" : "en";
    switchLanguage(newLocale);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="fixed top-4 right-4 z-50 bg-stone-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-stone-700/80 transition-colors cursor-target flex items-center gap-2"
      aria-label={`Switch to ${currentLocale === "en" ? "Korean" : "English"}`}
    >
      <span className="text-sm font-medium">
        {currentLocale === "en" ? "🇰🇷 한국어" : "🇺🇸 English"}
      </span>
    </button>
  );
}
