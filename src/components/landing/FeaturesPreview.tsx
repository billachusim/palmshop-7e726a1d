import { 
  WifiOff, 
  RefreshCw, 
  Eye, 
  Printer, 
  Users, 
  BarChart3,
  Shield,
  Zap
} from "lucide-react";

const features = [
  {
    icon: WifiOff,
    title: "Works Offline",
    description: "Continue selling even without internet. All data syncs automatically when you're back online.",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Sync",
    description: "Instant synchronization across all your devices. Make a sale on one, see it on all.",
  },
  {
    icon: Eye,
    title: "Remote Monitoring",
    description: "View your store's performance from anywhere. Track sales, inventory, and staff in real-time.",
  },
  {
    icon: Printer,
    title: "Flexible Printing",
    description: "Support for built-in thermal printers, Bluetooth, and USB printers. Print receipts your way.",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description: "Create accounts for your staff with customizable permissions and role-based access.",
  },
  {
    icon: BarChart3,
    title: "Smart Reports",
    description: "Detailed analytics and reports to help you make informed business decisions.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your data is encrypted and backed up. Rest easy knowing your business is protected.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed. Process transactions quickly even on modest hardware.",
  },
];

export function FeaturesPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Run Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed for real-world business needs. 
            Simple enough to use, powerful enough to scale.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
