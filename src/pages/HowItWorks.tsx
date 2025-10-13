import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="w-16 h-16" />,
      step: "01",
      title: "Define Your Mission",
      symbol: "■",
      description: "We start by understanding your brand, goals, and target audience. Through detailed discovery sessions, we map out your unique digital journey.",
      details: [
        "Brand analysis & audit",
        "Competitor research",
        "Target audience profiling",
        "Goal setting & KPI definition",
      ],
    },
    {
      icon: <Users className="w-16 h-16" />,
      step: "02",
      title: "Summon Your Team",
      symbol: "■■",
      description: "Our expert squad assembles a custom strategy tailored to your needs. Every campaign is crafted with precision and creativity.",
      details: [
        "Strategy development",
        "Creative concept creation",
        "Channel selection",
        "Timeline & milestone planning",
      ],
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      step: "03",
      title: "Level Up Continuously",
      symbol: "■■■",
      description: "We launch, monitor, and optimize your campaigns in real-time. Your success is measured, celebrated, and scaled.",
      details: [
        "Campaign execution",
        "Performance tracking",
        "A/B testing & optimization",
        "Regular reporting & insights",
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold">
              Your Journey to{" "}
              <span className="text-primary text-glow-cyan">Digital Greatness</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-poppins">
              A systematic approach to transforming your brand into a digital legend
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-500 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon & Step Number */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="text-primary group-hover:text-glow-cyan transition-all animate-float">
                          {step.icon}
                        </div>
                        <div className="absolute -top-4 -right-4 text-6xl font-orbitron font-bold text-primary/20 group-hover:text-primary/40 transition-all">
                          {step.step}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-3xl md:text-4xl font-orbitron font-bold group-hover:text-primary transition-all">
                        {step.title}
                        <span className="text-secondary ml-2">{step.symbol}</span>
                      </h3>
                      <p className="text-lg text-muted-foreground font-poppins">
                        {step.description}
                      </p>
                      <ul className="grid md:grid-cols-2 gap-3 pt-4">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary text-xl">▸</span>
                            <span className="text-muted-foreground font-poppins">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>

                {/* Progress Line */}
                {index < steps.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 animate-pulse-glow" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
              Ready to Begin Your{" "}
              <span className="text-primary text-glow-cyan">Quest</span>?
            </h2>
            <p className="text-xl text-muted-foreground font-poppins">
              Let's map out your journey to digital dominance
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Start Your Adventure</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
