import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedBackground from "./AnimatedBackground";
import GSAPTextAnimation from "./GSAPTextAnimation";

const Hero = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate badge entrance
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)", delay: 0.2 }
      );
    }

    // Animate buttons
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("button, a");
      gsap.fromTo(
        buttons,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 0.8 }
      );
    }

    // Animate stats
    if (statsRef.current) {
      const stats = statsRef.current.querySelectorAll("div > div");
      gsap.fromTo(
        stats,
        { opacity: 0, y: 50, scale: 0.5 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: "elastic.out(1, 0.5)", delay: 1.2 }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Professional Background */}
      <AnimatedBackground variant="hero" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-poppins">Digital Marketing Agency</span>
          </div>

          {/* Main Headline */}
          <GSAPTextAnimation className="text-5xl md:text-7xl font-orbitron font-bold leading-tight">
            Level Up Your Brand in the{" "}
            <span className="text-primary text-glow-cyan">Digital World</span>
            <span className="text-secondary">■</span>
          </GSAPTextAnimation>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            At Shinrai Connect, we merge creativity, technology, and strategy to help brands evolve into{" "}
            <span className="text-secondary font-semibold">digital legends</span>.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" asChild className="button-3d">
              <Link to="/contact">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="neon" size="xl" asChild className="button-3d">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            {[
              { value: "500+", label: "Projects" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary text-glow-cyan">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
