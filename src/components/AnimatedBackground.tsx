import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "footer";
}

const AnimatedBackground = ({ variant = "section" }: AnimatedBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = shapesRef.current;
    
    // Animate shapes with GSAP
    shapes.forEach((shape, index) => {
      if (!shape) return;

      // Floating animation
      gsap.to(shape, {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-15, 15)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });

      // Scale pulse animation
      gsap.to(shape, {
        scale: "random(0.8, 1.2)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3,
      });

      // Opacity animation
      gsap.to(shape, {
        opacity: "random(0.3, 0.7)",
        duration: "random(2, 5)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.1,
      });
    });

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 10;
        gsap.to(shape, {
          x: `+=${xPercent * speed}`,
          y: `+=${yPercent * speed}`,
          duration: 1,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.killTweensOf(shapes);
    };
  }, []);

  const getShapeConfig = () => {
    switch (variant) {
      case "hero":
        return [
          { size: 300, gradient: "from-primary/30 via-primary/20 to-transparent", blur: "blur-3xl" },
          { size: 250, gradient: "from-secondary/25 via-secondary/15 to-transparent", blur: "blur-2xl" },
          { size: 200, gradient: "from-accent/20 via-accent/10 to-transparent", blur: "blur-3xl" },
          { size: 180, gradient: "from-primary/15 via-transparent to-secondary/10", blur: "blur-2xl" },
          { size: 220, gradient: "from-secondary/20 via-primary/10 to-transparent", blur: "blur-3xl" },
        ];
      case "footer":
        return [
          { size: 200, gradient: "from-primary/20 via-transparent to-transparent", blur: "blur-2xl" },
          { size: 150, gradient: "from-secondary/15 via-transparent to-transparent", blur: "blur-xl" },
          { size: 180, gradient: "from-accent/15 via-transparent to-transparent", blur: "blur-2xl" },
        ];
      default:
        return [
          { size: 250, gradient: "from-primary/25 via-transparent to-transparent", blur: "blur-3xl" },
          { size: 200, gradient: "from-secondary/20 via-transparent to-transparent", blur: "blur-2xl" },
          { size: 180, gradient: "from-accent/15 via-transparent to-transparent", blur: "blur-2xl" },
          { size: 150, gradient: "from-primary/10 via-secondary/10 to-transparent", blur: "blur-xl" },
        ];
    }
  };

  const shapes = getShapeConfig();

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated light beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating gradient shapes */}
      {shapes.map((shape, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) shapesRef.current[index] = el;
          }}
          className={`absolute rounded-full bg-gradient-to-br ${shape.gradient} ${shape.blur}`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
      
      {/* Animated scan lines for anime effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-primary"
            style={{
              top: `${i * 5}%`,
              animation: `scanline ${3 + i * 0.1}s linear infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
