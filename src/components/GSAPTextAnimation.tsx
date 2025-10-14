import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface GSAPTextAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GSAPTextAnimation = ({ children, className = "", delay = 0 }: GSAPTextAnimationProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const chars = element.textContent?.split("") || [];
    
    // Wrap each character in a span
    element.innerHTML = chars
      .map((char) => `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    const charElements = element.querySelectorAll("span");

    // Animate each character
    gsap.fromTo(
      charElements,
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.02,
        delay: delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Glitch effect on hover
    const handleMouseEnter = () => {
      gsap.to(charElements, {
        x: "random(-5, 5)",
        y: "random(-3, 3)",
        duration: 0.1,
        stagger: 0.01,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [delay]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default GSAPTextAnimation;
