import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (selector: string) => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: selector,
    },
    ease: "power2.out"
  });
};
