import { ArrowRight, Smartphone, Tablet, Laptop, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Complete POS Solution</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your Business,{" "}
              <span className="gradient-text">One Powerful</span>{" "}
              POS System
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Palmshop delivers everything you need — cross-platform software that works offline, 
              ready-to-use devices, and professional setup. Your complete business solution, 
              from one trusted source.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg border-0 text-base" asChild>
                <a href="#download">
                  Download Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#hardware">Shop Hardware</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">10K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">Platforms</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold gradient-text">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
          
          {/* Device Showcase */}
          <div className="relative">
            <div className="relative z-10 bg-card rounded-3xl p-8 card-shadow">
              {/* Main Device Display */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-64 bg-foreground rounded-3xl shadow-2xl flex flex-col items-center justify-center p-4 transform -rotate-6">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">Palmshop</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating device icons */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-card rounded-xl card-shadow flex items-center justify-center animate-bounce" style={{ animationDelay: "0s" }}>
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-card rounded-xl card-shadow flex items-center justify-center animate-bounce" style={{ animationDelay: "0.2s" }}>
                  <Tablet className="w-6 h-6 text-accent" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-card rounded-xl card-shadow flex items-center justify-center animate-bounce" style={{ animationDelay: "0.4s" }}>
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-card rounded-xl card-shadow flex items-center justify-center animate-bounce" style={{ animationDelay: "0.6s" }}>
                  <Monitor className="w-6 h-6 text-accent" />
                </div>
              </div>
              
              {/* Platform Labels */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {["Android", "iOS", "Windows", "macOS", "Linux", "Web"].map((platform) => (
                  <span
                    key={platform}
                    className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
