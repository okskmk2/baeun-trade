"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { useI18n } from "@/providers/I18nProvider";

const industries = [
  {
    icon: "fa-apple-alt",
    titleKey: "home.industries.food.title",
    descKey: "home.industries.food.desc",
  },
  {
    icon: "fa-industry",
    titleKey: "home.industries.manufacturing.title",
    descKey: "home.industries.manufacturing.desc",
  },
  {
    icon: "fa-seedling",
    titleKey: "home.industries.agriculture.title",
    descKey: "home.industries.agriculture.desc",
  },
  {
    icon: "fa-hammer",
    titleKey: "home.industries.raw.title",
    descKey: "home.industries.raw.desc",
  },
];

const serviceItems = {
  marketplace: [
    "home.services.marketplace.item1",
    "home.services.marketplace.item2",
    "home.services.marketplace.item3",
  ],
  assurance: [
    "home.services.assurance.item1",
    "home.services.assurance.item2",
    "home.services.assurance.item3",
  ],
  logistics: [
    "home.services.logistics.item1",
    "home.services.logistics.item2",
    "home.services.logistics.item3",
  ],
};

export default function Home() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
              {t("common.brand")}
            </Link>
            <nav className="flex items-center">
              <Link
                href="/contact"
                className="hidden md:block hover:text-blue-300 transition-colors"
              >
                {t("common.nav.contact")}
              </Link>
              <Link
                href="/contact"
                className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                {t("common.nav.contact")}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight md:leading-[1.2]">
              {t("home.hero.titleMain")}{" "}
              <span className="text-blue-400">
                {t("home.hero.titleAccent")}
              </span>
            </h1>
            <p className="text-base sm:text-xl text-slate-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
              {t("home.hero.subtitle")}
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-block hover:bg-blue-500 transition-colors"
            >
              {t("home.hero.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* Company Strengths Stats */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <i className="fas fa-users text-3xl text-blue-600 mb-4"></i>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                500+
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                {t("home.stats.buyers.title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("home.stats.buyers.desc")}
              </p>
            </div>
            <div className="text-center bg-blue-600 text-white rounded-xl p-6 sm:p-8 shadow-md">
              <i className="fas fa-check-circle text-3xl text-blue-200 mb-4"></i>
              <div className="text-4xl sm:text-5xl font-bold mb-2">99.8%</div>
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                {t("home.stats.fulfillment.title")}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                {t("home.stats.fulfillment.desc")}
              </p>
            </div>
            <div className="text-center bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <i className="fas fa-clock text-3xl text-blue-600 mb-4"></i>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                48h
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                {t("home.stats.processing.title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("home.stats.processing.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banking & LC Emphasis */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t("home.banking.title")}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              {t("home.banking.subtitle")}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              {t("home.banking.cardTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <i className="fas fa-university text-blue-600 mt-1 shrink-0"></i>
                <span>{t("home.banking.point1")}</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <i className="fas fa-file-contract text-blue-600 mt-1 shrink-0"></i>
                <span>{t("home.banking.point2")}</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <i className="fas fa-credit-card text-blue-600 mt-1 shrink-0"></i>
                <span>{t("home.banking.point3")}</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <i className="fas fa-handshake text-blue-600 mt-1 shrink-0"></i>
                <span>{t("home.banking.point4")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {t("home.industries.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {t("home.industries.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry) => (
              <div
                key={industry.titleKey}
                className="bg-gray-50 p-5 sm:p-6 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i
                    className={`fas ${industry.icon} text-2xl text-blue-600`}
                  ></i>
                </div>
                <div className="font-semibold text-gray-900 mb-1 leading-snug">
                  {t(industry.titleKey)}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {t(industry.descKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t("home.services.title")}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              {t("home.services.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-l-4 border-blue-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-store text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                  {t("home.services.marketplace.title")}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-apple-alt text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.marketplace[0])}</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cogs text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.marketplace[1])}</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-cube text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.marketplace[2])}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-l-4 border-slate-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-shield-alt text-2xl text-slate-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                  {t("home.services.assurance.title")}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-lock text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.assurance[0])}</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clipboard-check text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.assurance[1])}</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-handshake text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.assurance[2])}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border-l-4 border-blue-600">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-shipping-fast text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                  {t("home.services.logistics.title")}
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-globe text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.logistics[0])}</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-file-alt text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.logistics[1])}</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock text-gray-500 mr-3"></i>
                  <span>{t(serviceItems.logistics[2])}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Finance & Escrow System */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t("home.escrow.title")}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
              {t("home.escrow.subtitle")}
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-money-check-alt text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {t("home.escrow.securePayment.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("home.escrow.securePayment.desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-search-plus text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {t("home.escrow.inspection.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("home.escrow.inspection.desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-shield text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {t("home.escrow.broker.title")}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t("home.escrow.broker.desc")}
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-full sm:w-auto flex items-center justify-center bg-white px-5 py-3 rounded-lg shadow gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                      1
                    </span>
                    <i className="fas fa-university text-blue-600"></i>
                    <span className="font-semibold">
                      {t("home.escrow.step1")}
                    </span>
                  </div>
                  <span className="mt-2 sm:hidden">
                    <i className="fas fa-chevron-right rotate-90 text-gray-400"></i>
                  </span>
                </div>
                <span className="hidden sm:block">
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </span>

                <div className="flex flex-col items-center">
                  <div className="w-full sm:w-auto flex items-center justify-center bg-white px-5 py-3 rounded-lg shadow gap-3">
                    <span className="bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                      2
                    </span>
                    <i className="fas fa-shield-alt text-slate-600"></i>
                    <span className="font-semibold">
                      {t("home.escrow.step2")}
                    </span>
                  </div>
                  <span className="mt-2 sm:hidden">
                    <i className="fas fa-chevron-right rotate-90 text-gray-400"></i>
                  </span>
                </div>
                <span className="hidden sm:block">
                  <i className="fas fa-chevron-right text-gray-400"></i>
                </span>

                <div className="w-full sm:w-auto flex items-center justify-center bg-white px-5 py-3 rounded-lg shadow gap-3">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </span>
                  <i className="fas fa-check-circle text-blue-600"></i>
                  <span className="font-semibold">
                    {t("home.escrow.step3")}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("home.escrow.footnote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
            {t("home.cta.title")}
          </h2>
          <p className="text-base sm:text-xl mb-8 leading-relaxed">
            {t("home.cta.subtitle")}
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold inline-block hover:bg-blue-700 transition-colors"
          >
            <i className="fas fa-rocket mr-2"></i>
            {t("home.cta.button")}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
