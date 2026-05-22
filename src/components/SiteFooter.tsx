"use client";

import { localeLabels, locales, type Locale } from "@/i18n";
import { useI18n } from "@/providers/I18nProvider";

export function SiteFooter() {
  const { locale, setLocale, t } = useI18n();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-gray-400 text-sm leading-relaxed">
          &copy; 2026 Baeun Trade. {t("common.footer.rights")}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <label htmlFor="language" className="text-gray-300">
              {t("common.language.label")}
            </label>
            <select
              id="language"
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              className="bg-gray-700 border border-gray-600 rounded-md px-3 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {locales.map((code) => (
                <option key={code} value={code}>
                  {localeLabels[code]}
                </option>
              ))}
            </select>
          </div>

          <a
            href="https://wa.me/821049200523"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors break-all"
          >
            <i className="fab fa-whatsapp text-green-400"></i>
            +82 10-4920-0523
          </a>
          <a
            href="mailto:sourcing@baeun.com"
            className="flex items-center gap-2 hover:text-white transition-colors break-all"
          >
            <i className="fas fa-envelope text-gray-400"></i>
            sourcing@baeun.com
          </a>
        </div>
      </div>
    </footer>
  );
}
