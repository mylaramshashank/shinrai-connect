import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero3DBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Disable mousemove effects on mobile for performance
    if (isMobile) return;
    
    const container = canvasRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const shapes = container.querySelectorAll('.floating-shape');
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        (shape as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px) rotateZ(${x}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const shapes = [
    { size: 200, top: '10%', left: '10%', delay: 0, color: 'from-primary/20 to-transparent' },
    { size: 150, top: '60%', left: '80%', delay: 2, color: 'from-secondary/20 to-transparent' },
    { size: 180, top: '40%', left: '70%', delay: 4, color: 'from-primary/15 to-transparent' },
    { size: 120, top: '70%', left: '20%', delay: 3, color: 'from-secondary/15 to-transparent' },
    { size: 160, top: '20%', left: '50%', delay: 1, color: 'from-accent/20 to-transparent' },
  ];

  // Reduce number of shapes on mobile for performance
  const displayShapes = isMobile ? shapes.slice(0, 2) : shapes;

  return (
    <div ref={canvasRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {displayShapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shape absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl opacity-50`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            top: shape.top,
            left: shape.left,
            animationDelay: `${shape.delay}s`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default Hero3DBackground;
