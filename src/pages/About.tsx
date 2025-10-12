import { Target, Eye, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Mission",
      description: "To make marketing as thrilling as an anime adventure—dynamic, creative, and always evolving.",
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Vision",
      description: "To connect creativity and technology to unlock unlimited digital potential for every brand.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Energy",
      description: "Powered by passion, innovation, and the relentless pursuit of digital excellence.",
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
              The Power Behind{" "}
              <span className="text-primary text-glow-cyan">Shinrai Connect</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-poppins">
              Where creativity meets technology in an epic digital adventure
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4 text-center">
                  <div className="inline-block text-primary group-hover:text-glow-cyan transition-all animate-float">
                    {value.icon}
                  </div>
                  <h3 className="text-3xl font-orbitron font-bold group-hover:text-primary transition-all">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-poppins">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center">
              Our Story
              <span className="text-secondary">■</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-poppins">
              <p>
                In a world where brands struggle to stand out in the digital noise, Shinrai Connect emerged as a beacon of innovation and creativity. Born from the fusion of anime-inspired aesthetics and cutting-edge marketing strategies, we believe that every brand has a hero's journey waiting to unfold.
              </p>
              <p>
                Our team of digital warriors combines years of expertise in social media, SEO, advertising, and content creation to craft campaigns that don't just reach audiences—they captivate them. We're not just marketers; we're storytellers, strategists, and technology enthusiasts who live and breathe the digital realm.
              </p>
              <p className="text-primary font-semibold">
                At Shinrai Connect, we don't just help brands level up—we help them become legends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Waves Visual */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
          <div className="absolute inset-0 animate-pulse-glow" style={{ 
            background: "repeating-linear-gradient(90deg, transparent, transparent 10px, hsl(180 100% 50% / 0.05) 10px, hsl(180 100% 50% / 0.05) 20px)"
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
              Ready to Join the{" "}
              <span className="text-primary text-glow-cyan">Adventure</span>?
            </h2>
            <p className="text-xl text-muted-foreground font-poppins">
              Let's write your brand's next chapter together
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
