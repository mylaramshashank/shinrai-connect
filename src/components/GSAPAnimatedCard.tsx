import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface GSAPAnimatedCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const GSAPAnimatedCard = ({ icon, title, description, index }: GSAPAnimatedCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const icon = iconRef.current;
    const content = contentRef.current;

    // Initial entrance animation
    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 100,
        rotationX: -15,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Icon floating animation
    if (icon) {
      gsap.to(icon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(icon, {
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        boxShadow: "0 20px 60px -10px rgba(0, 255, 255, 0.5)",
        duration: 0.3,
        ease: "power2.out",
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1.2,
          rotation: 360,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      }

      if (content) {
        gsap.to(content, {
          x: 5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 0 0 0 rgba(0, 255, 255, 0)",
        duration: 0.3,
        ease: "power2.out",
      });

      if (icon) {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (content) {
        gsap.to(content, {
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [index]);

  return (
    <div ref={cardRef} style={{ perspective: "1000px" }}>
      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 cursor-pointer h-full relative overflow-hidden">
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow blur-sm" style={{ animationDuration: "3s" }} />
        </div>

        <CardHeader className="relative z-10">
          <div ref={iconRef} className="text-primary mb-4">
            {icon}
          </div>
          <CardTitle className="text-2xl font-orbitron">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent ref={contentRef} className="relative z-10">
          <p className="text-muted-foreground font-poppins">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default GSAPAnimatedCard;
