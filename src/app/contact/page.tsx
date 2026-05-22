"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/providers/I18nProvider";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-blue-300 transition-colors">
              {t("common.brand")}
            </Link>
            <nav className="flex items-center">
              <Link href="/contact" className="hidden md:block text-blue-300">{t("common.nav.contact")}</Link>
              <Link href="/contact" className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                {t("common.nav.contact")}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Content */}
      <section className="py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">{t("contact.title")}</h1>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-10 space-y-8">
            {/* WhatsApp */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                <i className="fab fa-whatsapp text-3xl"></i>
              </div>
              <div className="min-w-0">
                <div className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wide">WhatsApp</div>
                <a
                  href="https://wa.me/821049200523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-semibold text-gray-900 hover:text-green-600 transition-colors leading-snug break-all"
                >
                  +82 10-4920-0523
                </a>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{t("common.contact.whatsappHint")}</p>
              </div>
            </div>

            <div className="border-t border-gray-100"></div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <div className="min-w-0">
                <div className="text-sm text-gray-500 mb-1 font-medium uppercase tracking-wide">Email</div>
                <a
                  href="mailto:sourcing@baeun.com"
                  className="text-xl sm:text-2xl font-semibold text-gray-900 hover:text-blue-600 transition-colors leading-snug break-all"
                >
                  sourcing@baeun.com
                </a>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{t("common.contact.emailHint")}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              ← {t("common.backToHome")}
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
