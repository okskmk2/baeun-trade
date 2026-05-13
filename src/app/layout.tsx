import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Baeun Trade | Global Trade Brokerage & LC Processing",
    template: "%s | Baeun Trade",
  },
  description:
    "Baeun Trade is a reliable international trade brokerage offering LC processing, escrow services, and access to 500+ global buyers. Swift 48-hour processing, 99.8% fulfillment rate.",
  keywords: [
    "trade brokerage",
    "LC processing",
    "letter of credit",
    "international trade",
    "escrow service",
    "trade assurance",
    "global buyers",
    "export import",
    "trade finance",
    "sourcing agent",
    "Korea trade",
    "baeun trade",
  ],
  authors: [{ name: "Baeun Trade" }],
  creator: "Baeun Trade",
  metadataBase: new URL("https://trade.baeun.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trade.baeun.com",
    siteName: "Baeun Trade",
    title: "Baeun Trade | Global Trade Brokerage & LC Processing",
    description:
      "Reliable international trade brokerage with 500+ global buyers. Expert LC processing, escrow services, and swift 48-hour execution.",
    images: [
      {
        url: "/logo-v2.svg",
        width: 1200,
        height: 630,
        alt: "Baeun Trade - Global Trade Brokerage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baeun Trade | Global Trade Brokerage & LC Processing",
    description:
      "Reliable international trade brokerage with 500+ global buyers. Expert LC processing, escrow services, and swift 48-hour execution.",
    images: ["/logo-v2.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://trade.baeun.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
