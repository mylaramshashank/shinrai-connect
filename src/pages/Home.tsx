import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import FlipCard3D from "@/components/FlipCard3D";
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
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
              Your Digital Saga{" "}
              <span className="text-primary text-glow-cyan">Begins Here</span>
            </h2>
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
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12">
            Power-Up Your Brand
            <span className="text-secondary">■■</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <FlipCard3D
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold">
              Join the{" "}
              <span className="text-primary text-glow-cyan">Shinrai Universe</span>
            </h2>
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
