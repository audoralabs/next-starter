import type { WebSite, WithContext } from "schema-dts";
import type { Metadata, Viewport } from "next";
import { SITE_CONFIG } from "@/config/site";

export function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    alternateName: SITE_CONFIG.alternateNames,
  };
}

export function getMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: "/",
    },

    title: {
      template: `%s - ${SITE_CONFIG.name}`,
      default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    },

    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    authors: [
      {
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    ],

    creator: SITE_CONFIG.name,
    openGraph: {
      siteName: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      type: "website",
      locale: "en_US",
      title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
      description: SITE_CONFIG.shortDescription,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
      description: SITE_CONFIG.shortDescription,
      images: [SITE_CONFIG.ogImage],
    },

    icons: {
      icon: [
        { url: "/favicon/favicon.ico", sizes: "any" },
        { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      ],
      apple: {
        url: "/favicon/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  };
}
