import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  return { scrollToSection };
};
