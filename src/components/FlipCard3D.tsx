import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface FlipCard3DProps {
  icon: ReactNode;
  title: string;
  description: string;
  backContent?: string;
  index: number;
}

const FlipCard3D = ({ icon, title, description, backContent, index }: FlipCard3DProps) => {
  return (
    <div 
      className="card-3d h-[280px] animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-3d-inner h-full">
        {/* Front of card */}
        <Card className="card-3d-front group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/60 transition-all duration-300 cursor-pointer border-glow-cyan h-full">
          <CardHeader>
            <div className="text-primary group-hover:text-glow-cyan transition-all mb-4 animate-float">
              {icon}
            </div>
            <CardTitle className="text-2xl font-orbitron group-hover:text-primary transition-all">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground font-poppins">
              {description}
            </p>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="card-3d-back bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-secondary/40 h-full flex items-center justify-center">
          <CardContent className="p-6 text-center">
            <div className="text-secondary mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-orbitron font-bold text-secondary mb-4">
              {title}
            </h3>
            <p className="text-foreground font-poppins">
              {backContent || "We'll help you achieve exceptional results with cutting-edge strategies and proven methodologies."}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlipCard3D;
