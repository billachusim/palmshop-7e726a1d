import { Download, Smartphone, Monitor, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Google Play",
    icon: Smartphone,
    description: "For Android devices",
    link: "#",
    badge: "Android",
  },
  {
    name: "App Store",
    icon: Apple,
    description: "For iPhone & iPad",
    link: "#",
    badge: "iOS",
  },
  {
    name: "Windows",
    icon: Monitor,
    description: "For Windows PC",
    link: "#",
    badge: "Desktop",
  },
  {
    name: "macOS",
    icon: Apple,
    description: "For Mac computers",
    link: "#",
    badge: "Desktop",
  },
  {
    name: "Direct APK",
    icon: Download,
    description: "Download APK directly",
    link: "#",
    badge: "Android",
  },
];

export function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero-bg" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Download Palmshop{" "}
            <span className="gradient-text">Free</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Available on all major platforms. Download now and start managing 
            your business in minutes.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              className="group bg-card rounded-2xl p-6 card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <platform.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-muted text-xs font-medium text-muted-foreground mb-2">
                {platform.badge}
              </span>
              <h3 className="font-semibold mb-1">{platform.name}</h3>
              <p className="text-xs text-muted-foreground">{platform.description}</p>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Or prefer a device with Palmshop pre-installed?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="#hardware">Browse Ready-to-Use Devices</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
