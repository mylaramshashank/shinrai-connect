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
    services: [] as string[],
    message: "",
  });

  // handle text inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle checkbox toggles
  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  // handle submit
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const payload = {
    name: formData.name,
    email: formData.email,
    services: formData.services,
    message: formData.message,
  };

  try {
    const response = await fetch("http://localhost:5678/webhook/9ba198ec-6728-47fa-8fda-3ae7f4c9570d", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      toast({
        title: "🚀 Transmission Received!",
        description: "Your message has been sent successfully. We’ll contact you soon!",
      });
      setFormData({ name: "", email: "", services: [], message: "" });
    } else {
      const errorText = await response.text();
      console.error("Server responded with error:", errorText);
      toast({
        title: "⚠️ Transmission Failed",
        description: "Something went wrong. Try again later.",
      });
    }
  } catch (error) {
    console.error("Network error:", error);
    toast({
      title: "❌ Network Error",
      description: "Unable to reach Shinrai server.",
    });
  }
};

  const serviceOptions = [
    { value: "web-development & design", label: "Web Development & Design" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "seo & google ads", label: "SEO & Google Ads" },
    { value: "social-media", label: "Social Media Marketing" },
    { value: "content-creation", label: "Content Creation" },
    { value: "brand strategy", label: "Brand Strategy" },
    { value: "lead generation campaigns", label: "Lead Generation Campaigns" },
    { value: "email marketing", label: "Email Marketing" },
    { value: "e-commerce marketing", label: "E-Commerce Marketing" },
    { value: "video production & editing", label: "Video Production & Editing" },
    { value: "other", label: "Other" },
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
              Let's connect and start building your digital legend.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 animate-fade-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <div className="space-y-2">
                    <label className="text-sm font-poppins text-muted-foreground">
                      Services Interested In:
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((service) => (
                        <div key={service.value} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.value}
                            checked={formData.services.includes(service.value)}
                            onCheckedChange={() => handleServiceToggle(service.value)}
                          />
                          <label htmlFor={service.value} className="text-sm font-poppins">
                            {service.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Transmission <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-orbitron font-bold">
                Get in Touch <span className="text-secondary ml-2">■</span>
              </h2>
              
              <p className="text-lg text-muted-foreground font-poppins">
                Have questions? Want to discuss your project? We're here to help.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <Card
                    key={i}
                    className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all"
                  >
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="text-primary">{info.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <a href={info.href} className="text-foreground hover:text-primary">
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

