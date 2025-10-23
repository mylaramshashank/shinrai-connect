import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const GlobalAnimatedBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Disable mousemove effects on mobile for performance
    if (isMobile) return;
    
    const container = canvasRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const shapes = container.querySelectorAll('.floating-orb');
      const x = (e.clientX / window.innerWidth - 0.5) * 50;
      const y = (e.clientY / window.innerHeight - 0.5) * 50;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.4;
        const rotation = (x + y) * 0.05;
        (shape as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${rotation}deg) scale(${1 + index * 0.05})`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Reduce complexity on mobile
  const orbs = isMobile 
    ? [
        { size: 400, top: '20%', left: '10%', delay: 0, gradient: 'from-primary/20 via-primary/10 to-transparent', duration: 25 },
        { size: 350, top: '60%', left: '60%', delay: 5, gradient: 'from-secondary/15 via-secondary/10 to-transparent', duration: 30 },
      ]
    : [
        { size: 500, top: '10%', left: '5%', delay: 0, gradient: 'from-primary/20 via-primary/10 to-transparent', duration: 20 },
        { size: 400, top: '70%', left: '80%', delay: 2, gradient: 'from-secondary/20 via-secondary/10 to-transparent', duration: 25 },
        { size: 600, top: '35%', left: '55%', delay: 4, gradient: 'from-primary/15 via-accent/8 to-transparent', duration: 30 },
        { size: 300, top: '85%', left: '15%', delay: 3, gradient: 'from-secondary/15 via-secondary/8 to-transparent', duration: 22 },
        { size: 450, top: '20%', left: '40%', delay: 1, gradient: 'from-accent/20 via-primary/10 to-transparent', duration: 28 },
        { size: 550, top: '55%', left: '20%', delay: 5, gradient: 'from-primary/12 via-secondary/6 to-transparent', duration: 26 },
        { size: 350, top: '5%', left: '70%', delay: 2.5, gradient: 'from-secondary/18 via-accent/8 to-transparent', duration: 24 },
        { size: 480, top: '90%', left: '60%', delay: 4.5, gradient: 'from-primary/16 via-primary/8 to-transparent', duration: 27 },
      ];

  const particles = Array.from({ length: isMobile ? 15 : 50 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      {/* Dynamic grid pattern */}
      <div className="absolute inset-0 grid-pattern-animated opacity-15" />
      
      {/* Flowing scan lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              position: 'absolute',
              top: `${i * 3.33}%`,
              animation: `scan-line-flow ${4 + i * 0.15}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-primary animate-particle-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              opacity: particle.opacity,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Animated orbs with depth */}
      <div ref={canvasRef} className="absolute inset-0">
        {orbs.map((orb, index) => (
          <div
            key={index}
            className={`floating-orb absolute rounded-full bg-gradient-radial ${orb.gradient} blur-3xl animate-float-complex`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              top: orb.top,
              left: orb.left,
              animationDelay: `${orb.delay}s`,
              animationDuration: `${orb.duration}s`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}
      </div>

      {/* Animated corner spotlights */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl animate-pulse-glow-strong" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/30 via-secondary/10 to-transparent blur-3xl animate-pulse-glow-strong" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/10 to-transparent blur-3xl animate-rotate-slow" />
      
      {/* Vertical accent beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-beam-slide" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-beam-slide" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default GlobalAnimatedBackground;
