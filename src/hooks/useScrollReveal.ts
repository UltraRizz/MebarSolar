import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealOptions = {
  distance?: number;
  end?: string;
  scrub?: number;
  start?: string;
};

const useScrollReveal = (
  rootRef: RefObject<HTMLElement>,
  selectors: string[],
  options: ScrollRevealOptions = {},
) => {
  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      const elements = selectors.flatMap((selector) =>
        Array.from(root.querySelectorAll<HTMLElement>(selector)),
      );
      const uniqueElements = Array.from(new Set(elements));

      gsap.set(uniqueElements, {
        autoAlpha: 0,
        y: options.distance ?? 44,
        willChange: "transform, opacity",
      });

      uniqueElements.forEach((element) => {
        gsap.to(element, {
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: element,
            start: options.start ?? "top 90%",
            end: options.end ?? "top 68%",
            scrub: options.scrub ?? 0.55,
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, root);

    return () => {
      context.revert();
    };
  });
};

export default useScrollReveal;
