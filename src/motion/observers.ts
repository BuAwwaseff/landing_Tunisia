"use client";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function observeOnce(
  element: Element,
  callback: () => void,
  options: {
    rootMargin?: string;
    threshold?: number;
  } = {},
) {
  if (typeof window === "undefined") return () => undefined;

  if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
    callback();
    return () => undefined;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;

      observer.disconnect();
      callback();
    },
    {
      rootMargin: options.rootMargin ?? "0px 0px -12% 0px",
      threshold: options.threshold ?? 0.2,
    },
  );

  observer.observe(element);

  return () => observer.disconnect();
}

