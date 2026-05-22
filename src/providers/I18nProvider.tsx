"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  dictionaries,
  isLocale,
  type Dictionary,
  type Locale,
} from "@/i18n";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "baeun-locale";

function getNestedValue(dict: Dictionary, key: string): unknown {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (typeof acc === "object" && acc !== null && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && isLocale(saved)) {
      return saved;
    }

    const browserLocale = navigator.language.toLowerCase();
    return browserLocale.startsWith("ko")
      ? "ko"
      : browserLocale.startsWith("id")
        ? "id"
        : browserLocale.startsWith("zh")
          ? "zh"
          : browserLocale.startsWith("ja")
            ? "ja"
            : "en";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    const current = dictionaries[locale];
    const fallback = dictionaries.en;

    return {
      locale,
      setLocale,
      t: (key: string) => {
        const currentValue = getNestedValue(current, key);
        if (typeof currentValue === "string") {
          return currentValue;
        }

        const fallbackValue = getNestedValue(fallback, key);
        if (typeof fallbackValue === "string") {
          return fallbackValue;
        }

        return key;
      },
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
