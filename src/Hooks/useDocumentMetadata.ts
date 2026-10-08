import { useEffect } from "react";

type DocumentMetaOptions = {
  description?: string;
  faviconUrl?: string;
  noIndex?: boolean;
};

function setMetaContent(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let meta = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function setCanonicalUrl(url: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

export function useDocumentMeta(
  title: string,
  { description = "", faviconUrl, noIndex = false }: DocumentMetaOptions = {},
) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      setMetaContent("name", "description", description);
      setMetaContent("property", "og:description", description);
      setMetaContent("name", "twitter:description", description);
    }

    setMetaContent("property", "og:title", title);
    setMetaContent("name", "twitter:title", title);
    const shareImageUrl = new URL("/theseon.Logo.svg", window.location.origin).href;
    setMetaContent("property", "og:image", shareImageUrl);
    setMetaContent("property", "og:image:alt", "theseOn logo");
    setMetaContent("name", "twitter:image", shareImageUrl);
    setMetaContent("property", "og:type", "website");
    setMetaContent("name", "twitter:card", "summary");
    setMetaContent("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    const canonicalUrl = new URL(window.location.pathname, window.location.origin);
    setCanonicalUrl(canonicalUrl.href);
    setMetaContent("property", "og:url", canonicalUrl.href);

    const structuredDataId = "theseon-page-structured-data";
    let structuredData = document.getElementById(
      structuredDataId,
    ) as HTMLScriptElement | null;
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = structuredDataId;
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": window.location.pathname === "/" ? "WebSite" : "WebPage",
      name: title,
      description,
      url: canonicalUrl.href,
      inLanguage: "en",
      isPartOf: {
        "@type": "WebSite",
        name: "theseOn",
        url: new URL("/", window.location.origin).href,
      },
    });

    if (faviconUrl) {
      let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = faviconUrl;
    }
  }, [title, description, faviconUrl, noIndex]);
}
