import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { en } from "@/data/languages/en";
import { ko } from "@/data/languages/ko";

const pretendard = localFont({
  src: "../../components/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

const pretendardMono = localFont({
  src: "../../components/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard-mono",
  weight: "45 920",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = ["en", "ko"].includes(locale) ? locale : "en";
  const t = validLocale === "ko" ? ko : en;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jiseongoh.dev";
  const avatarUrl = `${baseUrl}/images/profile/avatar.webp`;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    authors: [{ name: t.metadata.author }],
    creator: t.metadata.author,
    publisher: t.metadata.author,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: validLocale === "en" ? "/" : `/${validLocale}`,
      languages: {
        en: "/en",
        ko: "/ko",
      },
    },
    openGraph: {
      type: "website",
      siteName: t.metadata.siteName,
      title: t.metadata.title,
      description: t.metadata.description,
      url: validLocale === "en" ? baseUrl : `${baseUrl}/${validLocale}`,
      images: [
        {
          url: avatarUrl,
          width: 400,
          height: 400,
          alt: t.metadata.author,
        },
      ],
      locale: validLocale === "en" ? "en_US" : "ko_KR",
      alternateLocale: validLocale === "en" ? "ko_KR" : "en_US",
    },
    twitter: {
      card: "summary",
      title: t.metadata.title,
      description: t.metadata.description,
      images: [avatarUrl],
      creator: "@" + t.metadata.author.replace(/\s+/g, "").toLowerCase(),
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon.svg", sizes: "32x32" },
        { url: "/favicon.svg", sizes: "16x16" },
      ],
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ko" }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Ensure locale is valid, fallback to 'en' if not
  const validLocale = ["en", "ko"].includes(locale) ? locale : "en";

  return (
    <html lang={validLocale}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body
        className={`${pretendard.variable} ${pretendardMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
