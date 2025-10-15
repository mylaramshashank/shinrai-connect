import { useEffect, useRef } from "react";

const GlobalAnimatedBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const shapes = container.querySelectorAll('.floating-orb');
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        (shape as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px) scale(${1 + index * 0.05})`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const orbs = [
    { size: 400, top: '5%', left: '5%', delay: 0, gradient: 'from-primary/10 via-primary/5 to-transparent' },
    { size: 300, top: '70%', left: '85%', delay: 2, gradient: 'from-secondary/10 via-secondary/5 to-transparent' },
    { size: 500, top: '40%', left: '60%', delay: 4, gradient: 'from-primary/8 via-accent/5 to-transparent' },
    { size: 250, top: '80%', left: '10%', delay: 3, gradient: 'from-secondary/8 via-secondary/3 to-transparent' },
    { size: 350, top: '15%', left: '45%', delay: 1, gradient: 'from-accent/10 via-primary/5 to-transparent' },
    { size: 450, top: '50%', left: '25%', delay: 5, gradient: 'from-primary/6 via-secondary/4 to-transparent' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Scan lines for anime effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="h-px w-full bg-primary"
            style={{
              position: 'absolute',
              top: `${i * 5}%`,
              animation: `scan-line ${3 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div ref={canvasRef} className="absolute inset-0">
        {orbs.map((orb, index) => (
          <div
            key={index}
            className={`floating-orb absolute rounded-full bg-gradient-radial ${orb.gradient} blur-3xl`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              top: orb.top,
              left: orb.left,
              animationDelay: `${orb.delay}s`,
              transition: 'transform 0.5s ease-out',
            }}
          />
        ))}
      </div>

      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-secondary/20 to-transparent blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default GlobalAnimatedBackground;
