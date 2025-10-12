import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Share2, 
  Search, 
  Target, 
  Code, 
  FileText, 
  Users, 
  Mail, 
  ShoppingCart, 
  Video 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Social Media Marketing",
      description: "Build engaged communities and amplify your brand voice across all major platforms.",
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO & Google Ads",
      description: "Dominate search results with strategic optimization and high-converting paid campaigns.",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Brand Strategy",
      description: "Define your unique position in the market with data-driven strategic planning.",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Design & Development",
      description: "Create stunning, high-performance websites that convert visitors into customers.",
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Content Creation",
      description: "Craft compelling narratives that resonate with your audience and drive engagement.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Lead Generation Campaigns",
      description: "Attract and nurture qualified leads with targeted multi-channel campaigns.",
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email Marketing",
      description: "Build lasting relationships through personalized email campaigns that convert.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-Commerce Marketing",
      description: "Boost online sales with optimized product listings and conversion strategies.",
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Video Production & Editing",
      description: "Tell your story through professional video content that captures attention.",
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
              Choose Your{" "}
              <span className="text-primary text-glow-cyan">Power-Up</span>
              <span className="text-secondary">■■</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-poppins">
              Unlock the full potential of your brand with our comprehensive suite of digital services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="text-primary group-hover:text-glow-cyan transition-all mb-4 animate-float">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-orbitron group-hover:text-primary transition-all">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-poppins">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
              Ready to Level Up?
            </h2>
            <p className="text-xl text-muted-foreground font-poppins">
              Let's discuss which services will best power up your brand
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
