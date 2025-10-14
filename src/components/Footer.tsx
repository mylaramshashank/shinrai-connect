import { Heart } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 py-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow" />
      
      {/* Animated Background */}
      <AnimatedBackground variant="footer" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Shinrai Connect. All Rights Reserved. 
            <span className="flex items-center gap-1">
              Designed with <Heart className="w-4 h-4 text-secondary animate-pulse" fill="currentColor" /> and anime energy.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
