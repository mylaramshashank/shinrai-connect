import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Globe, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    services: [] as string[],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Transmission Received! ■",
      description: "We'll contact you soon to begin your digital adventure.",
    });
    setFormData({ name: "", email: "", company: "", services: [], message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const serviceOptions = [
    { value: "social-media-marketing", label: "Social Media Marketing" },
    { value: "seo-google-ads", label: "SEO & Google Ads" },
    { value: "brand-strategy", label: "Brand Strategy" },
    { value: "web-design-development", label: "Web Design & Development" },
    { value: "content-creation", label: "Content Creation" },
    { value: "lead-generation", label: "Lead Generation Campaigns" },
    { value: "email-marketing", label: "Email Marketing" },
    { value: "ecommerce-marketing", label: "E-Commerce Marketing" },
    { value: "video-production", label: "Video Production & Editing" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contact@shinraiconnect.com",
      href: "mailto:contact@shinraiconnect.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91-XXXXXXXXXX",
      href: "tel:+91XXXXXXXXXX",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "www.shinraiconnect.com",
      href: "https://www.shinraiconnect.com",
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
              Ready to Begin Your{" "}
              <span className="text-primary text-glow-cyan">Adventure</span>?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-poppins">
              Let's connect and start building your digital legend
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-poppins text-muted-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-input border-primary/20 focus:border-primary focus:ring-primary text-foreground"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-poppins text-muted-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-input border-primary/20 focus:border-primary focus:ring-primary text-foreground"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-poppins text-muted-foreground">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-input border-primary/20 focus:border-primary focus:ring-primary text-foreground"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-poppins font-semibold text-foreground">
                      Services Interested In
                    </label>
                    <p className="text-xs text-muted-foreground mb-4">Select all services that apply to your needs</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <div
                          key={service.value}
                          onClick={() => handleServiceToggle(service.value)}
                          className={`
                            relative flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer
                            transition-all duration-300 hover:shadow-md hover:scale-[1.02]
                            ${
                              formData.services.includes(service.value)
                                ? "border-primary bg-primary/10 shadow-sm"
                                : "border-border bg-card hover:border-primary/50"
                            }
                          `}
                        >
                          <Checkbox
                            id={service.value}
                            checked={formData.services.includes(service.value)}
                            onCheckedChange={() => handleServiceToggle(service.value)}
                            className="border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary pointer-events-none"
                          />
                          <label
                            htmlFor={service.value}
                            className="text-sm font-poppins font-medium text-foreground cursor-pointer flex-1 pointer-events-none"
                          >
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-poppins text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-input border-primary/20 focus:border-primary focus:ring-primary text-foreground resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Transmission <Send className="ml-2 w-5 h-5" />
                    <span className="ml-2">■</span>
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-6">
                <h2 className="text-3xl font-orbitron font-bold">
                  Get in Touch
                  <span className="text-secondary ml-2">■</span>
                </h2>
                <p className="text-lg text-muted-foreground font-poppins">
                  Have questions? Want to discuss your project? We're here to help you level up your digital presence.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="text-primary">{info.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground font-poppins">
                          {info.label}
                        </div>
                        <a
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors font-poppins"
                        >
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-orbitron font-bold text-glow-cyan">
                    Why Choose Shinrai?
                  </h3>
                  <ul className="space-y-2 text-muted-foreground font-poppins">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">▸</span>
                      <span>Expert team with proven track record</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">▸</span>
                      <span>Cutting-edge strategies & technology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">▸</span>
                      <span>Transparent communication & reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-xl">▸</span>
                      <span>Results-driven approach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Light Field Background Effect */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 animate-pulse-glow" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
              Let's Create Something{" "}
              <span className="text-secondary text-glow-pink">Legendary</span>
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
