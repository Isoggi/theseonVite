import { useEffect } from "react";

export function useDocumentMeta(title: string, faviconUrl?: string) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (faviconUrl) {
      let link = document.querySelector<HTMLLinkElement>("link[rel='icon']");

      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = faviconUrl;
    }
  }, [title, faviconUrl]);
}
