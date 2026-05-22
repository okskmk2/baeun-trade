import en from "@/i18n/locales/en.json";
import id from "@/i18n/locales/id.json";
import ja from "@/i18n/locales/ja.json";
import ko from "@/i18n/locales/ko.json";
import zh from "@/i18n/locales/zh.json";

export const locales = ["en", "ko", "id", "zh", "ja"] as const;

export type Locale = (typeof locales)[number];

export type Dictionary = typeof en;

export const defaultLocale: Locale = "en";

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ko,
  id,
  zh,
  ja,
};

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  id: "Bahasa Indonesia",
  zh: "中文",
  ja: "日本語",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
