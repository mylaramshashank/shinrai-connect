import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import GSAPAnimatedCard from "@/components/GSAPAnimatedCard";
import GSAPTextAnimation from "@/components/GSAPTextAnimation";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Sparkles, Target, TrendingUp } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Social Media Magic",
      description: "Transform your social presence with engaging content that resonates",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "SEO Sorcery",
      description: "Dominate search rankings with strategic optimization",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Ad Mastery",
      description: "Maximize ROI with data-driven advertising campaigns",
    },
  ];

  return (
    <div>
      <Hero />

      {/* About Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <GSAPTextAnimation className="text-4xl md:text-5xl font-orbitron font-bold" delay={0.2}>
              Your Digital Saga{" "}
              <span className="text-primary text-glow-cyan">Begins Here</span>
            </GSAPTextAnimation>
            <p className="text-xl text-muted-foreground font-poppins">
              Guiding brands on their digital hero's journey, one strategic campaign at a time.
            </p>
            <Button variant="neon" size="lg" asChild className="button-3d">
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="section" />
        
        <div className="container mx-auto px-4 relative z-10">
          <GSAPTextAnimation className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12">
            Power-Up Your Brand
            <span className="text-secondary">■■</span>
          </GSAPTextAnimation>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <GSAPAnimatedCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild className="button-3d">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <GSAPTextAnimation className="text-4xl md:text-6xl font-orbitron font-bold">
              Join the{" "}
              <span className="text-primary text-glow-cyan">Shinrai Universe</span>
            </GSAPTextAnimation>
            <p className="text-xl text-muted-foreground font-poppins">
              Power Up Your Brand Today and Transform Your Digital Presence!
            </p>
            <Button variant="hero" size="xl" asChild className="button-3d">
              <Link to="/contact">Begin Your Adventure</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
