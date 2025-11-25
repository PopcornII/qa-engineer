import { useEffect, useRef } from "react";

export default function useScrollAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add("animate-fadeIn");
      }
    });

    observer.observe(element);
  }, []);

  return ref;
}
