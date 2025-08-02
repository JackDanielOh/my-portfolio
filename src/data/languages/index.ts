import { en } from "./en";
import { ko } from "./ko";

// Language type definition
export type Language = typeof en;

// Available languages
export const languages = {
  en,
  ko,
} as const;

export type LanguageKey = keyof typeof languages;

// Default language
export const defaultLanguage: LanguageKey = "en";

// Get language data
export function getLanguage(
  languageKey: LanguageKey = defaultLanguage
): Language {
  return languages[languageKey];
}

// Get portfolio data for specific language
export function getPortfolioData(languageKey: LanguageKey = defaultLanguage) {
  return languages[languageKey].portfolioData;
}
