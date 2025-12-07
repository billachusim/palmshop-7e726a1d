import { Check, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const hardwareProducts = [
  {
    category: "POS Devices",
    items: [
      {
        name: "Palmshop Pro Terminal",
        description: "All-in-one handheld POS with built-in printer, scanner, and 5.5\" display",
        price: "₦350,000",
        features: ["Built-in thermal printer", "Barcode scanner", "4G + WiFi", "8-hour battery", "Palmshop pre-installed"],
        badge: "Best Seller",
      },
      {
        name: "Palmshop Lite Terminal",
        description: "Compact handheld POS for mobile vendors and small businesses",
        price: "₦220,000",
        features: ["Built-in printer", "WiFi + Bluetooth", "6-hour battery", "Palmshop pre-installed"],
      },
    ],
  },
  {
    category: "Smartphones",
    items: [
      {
        name: "Business Phone Pro",
        description: "Rugged smartphone optimized for business use with Palmshop ready",
        price: "₦180,000",
        features: ["6.5\" display", "5000mAh battery", "Dual SIM", "Palmshop pre-installed", "Protective case included"],
      },
      {
        name: "Business Phone Basic",
        description: "Affordable smartphone for everyday business operations",
        price: "₦95,000",
        features: ["5.5\" display", "4000mAh battery", "Dual SIM", "Palmshop pre-installed"],
      },
    ],
  },
  {
    category: "Tablets",
    items: [
      {
        name: "Business Tablet 10\"",
        description: "Perfect countertop POS solution with large touchscreen",
        price: "₦250,000",
        features: ["10.1\" HD display", "Stand included", "WiFi + 4G option", "Palmshop pre-installed", "All-day battery"],
        badge: "Popular",
      },
      {
        name: "Business Tablet 8\"",
        description: "Portable tablet for on-the-go sales and inventory management",
        price: "₦165,000",
        features: ["8\" HD display", "Lightweight design", "WiFi + Bluetooth", "Palmshop pre-installed"],
      },
    ],
  },
  {
    category: "Laptops & Desktops",
    items: [
      {
        name: "Business Laptop",
        description: "Full-featured laptop for complete store management",
        price: "₦450,000",
        features: ["15.6\" display", "Intel processor", "256GB SSD", "Palmshop pre-installed", "1-year warranty"],
      },
      {
        name: "Business Desktop Bundle",
        description: "Complete desktop setup with monitor, keyboard, and mouse",
        price: "₦380,000",
        features: ["21.5\" monitor", "Compact PC", "Full accessories", "Palmshop pre-installed"],
      },
    ],
  },
  {
    category: "Printers",
    items: [
      {
        name: "Bluetooth Receipt Printer",
        description: "Portable thermal printer for receipts on the go",
        price: "₦55,000",
        features: ["Bluetooth 5.0", "80mm paper width", "USB charging", "10-hour battery", "Auto-connect with Palmshop"],
        badge: "Compact",
      },
      {
        name: "Desktop Receipt Printer",
        description: "High-speed thermal printer for busy checkout counters",
        price: "₦75,000",
        features: ["USB + Ethernet", "80mm paper width", "250mm/s print speed", "Auto-cutter", "Easy paper loading"],
      },
    ],
  },
];

export function HardwareSection() {
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in Palmshop hardware products.");

  return (
    <section id="hardware" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Hardware Store
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready-to-Use Devices with{" "}
            <span className="gradient-text">Palmshop Pre-Installed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get your complete business setup in one place. Every device comes with Palmshop 
            pre-installed and configured — just power on and start selling.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm">
            <Check className="w-4 h-4" />
            Free delivery & professional setup available
          </div>
        </div>
        
        {hardwareProducts.map((category) => (
          <div key={category.category} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-8 gradient-bg rounded-full" />
              {category.category}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((product) => (
                <div
                  key={product.name}
                  className="relative bg-card rounded-2xl p-6 card-shadow hover:shadow-lg transition-all duration-300 border border-border/50"
                >
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-bg text-primary-foreground text-xs font-medium">
                      {product.badge}
                    </span>
                  )}
                  
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-3xl font-bold gradient-text">{product.price}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3">
                    <Button className="flex-1 gradient-bg border-0">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi! I'm interested in the ${product.name}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
