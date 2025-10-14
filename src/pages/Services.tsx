import GSAPAnimatedCard from "@/components/GSAPAnimatedCard";
import GSAPTextAnimation from "@/components/GSAPTextAnimation";
import AnimatedBackground from "@/components/AnimatedBackground";
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
        <AnimatedBackground variant="hero" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <GSAPTextAnimation className="text-5xl md:text-7xl font-orbitron font-bold">
              Choose Your{" "}
              <span className="text-primary text-glow-cyan">Power-Up</span>
              <span className="text-secondary">■■</span>
            </GSAPTextAnimation>
            <p className="text-xl md:text-2xl text-muted-foreground font-poppins">
              Unlock the full potential of your brand with our comprehensive suite of digital services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <GSAPTextAnimation className="text-4xl md:text-5xl font-orbitron font-bold">
              Ready to Level Up?
            </GSAPTextAnimation>
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
