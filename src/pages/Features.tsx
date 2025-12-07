import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Users, 
  WifiOff, 
  RefreshCw,
  Eye,
  Printer,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Calculator,
  Tag,
  Layers,
  Clock,
  Bell,
  FileText
} from "lucide-react";

const featureCategories = [
  {
    title: "Products & Inventory",
    description: "Complete control over your products and stock",
    icon: Package,
    features: [
      { icon: Package, name: "Unlimited Products", description: "Add as many products as your business needs with categories and variants" },
      { icon: Tag, name: "Barcode Support", description: "Scan barcodes to quickly find and add products to sales" },
      { icon: Layers, name: "Stock Management", description: "Track inventory levels with low-stock alerts and reorder points" },
      { icon: Calculator, name: "Bulk Import/Export", description: "Import products from spreadsheets or export your catalog" },
    ],
  },
  {
    title: "Sales & Billing",
    description: "Fast, reliable point-of-sale operations",
    icon: ShoppingCart,
    features: [
      { icon: ShoppingCart, name: "Quick Checkout", description: "Process sales quickly with an intuitive, touch-friendly interface" },
      { icon: Printer, name: "Receipt Printing", description: "Print professional receipts on thermal or regular printers" },
      { icon: Tag, name: "Discounts & Promotions", description: "Apply percentage or fixed discounts, run promotions easily" },
      { icon: FileText, name: "Invoice Generation", description: "Create and send professional invoices to customers" },
    ],
  },
  {
    title: "Reports & Analytics",
    description: "Data-driven insights for better decisions",
    icon: BarChart3,
    features: [
      { icon: BarChart3, name: "Sales Reports", description: "Daily, weekly, monthly sales summaries with visual charts" },
      { icon: Package, name: "Inventory Reports", description: "Stock movement, valuation, and turnover analysis" },
      { icon: Users, name: "Staff Performance", description: "Track sales by employee, identify top performers" },
      { icon: Clock, name: "Peak Hours Analysis", description: "Understand your busiest times to optimize staffing" },
    ],
  },
  {
    title: "Multi-User & Roles",
    description: "Team management with granular permissions",
    icon: Users,
    features: [
      { icon: Users, name: "Unlimited Staff Accounts", description: "Create accounts for all your team members" },
      { icon: Shield, name: "Role-Based Permissions", description: "Control who can access what features and data" },
      { icon: Clock, name: "Shift Management", description: "Track clock-in/out times and manage schedules" },
      { icon: Bell, name: "Activity Logs", description: "Monitor all actions taken by staff members" },
    ],
  },
  {
    title: "Offline & Sync",
    description: "Work anywhere, sync everywhere",
    icon: WifiOff,
    features: [
      { icon: WifiOff, name: "Full Offline Mode", description: "Continue selling even without internet connection" },
      { icon: RefreshCw, name: "Automatic Sync", description: "Data syncs automatically when connection is restored" },
      { icon: Smartphone, name: "Multi-Device Sync", description: "Real-time synchronization across all your devices" },
      { icon: Shield, name: "Conflict Resolution", description: "Smart handling of data conflicts from multiple devices" },
    ],
  },
  {
    title: "Remote Monitoring",
    description: "Your store, accessible from anywhere",
    icon: Eye,
    features: [
      { icon: Eye, name: "Live Dashboard", description: "View real-time sales and activity from any location" },
      { icon: Bell, name: "Instant Notifications", description: "Get alerts for important events like low stock or big sales" },
      { icon: Globe, name: "Web Access", description: "Access your store data from any web browser" },
      { icon: Zap, name: "Quick Actions", description: "Approve refunds, adjust prices, manage remotely" },
    ],
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero-bg" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Powerful Features for{" "}
              <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run your business efficiently. From inventory 
              management to advanced analytics — all in one powerful app.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {featureCategories.map((category, index) => (
              <div key={category.title} className={`mb-20 last:mb-0 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="bg-card rounded-xl p-5 card-shadow border border-border/50 hover:border-primary/30 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.name}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Download Palmshop for free and experience all these features today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#download"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Download Free
              </a>
              <a
                href="/#hardware"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-card font-medium hover:bg-muted transition-colors"
              >
                Shop Hardware
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
