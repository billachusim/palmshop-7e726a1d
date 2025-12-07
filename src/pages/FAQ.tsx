import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    title: "Software & Compatibility",
    faqs: [
      {
        question: "What platforms does Palmshop support?",
        answer: "Palmshop is available on Android (phones & tablets), iOS (iPhone & iPad), Windows, macOS, Linux, and as a web app. Your data syncs seamlessly across all platforms.",
      },
      {
        question: "Can I use Palmshop without an internet connection?",
        answer: "Yes! Palmshop works fully offline. You can continue making sales, adding products, and managing inventory without internet. All changes sync automatically when you're back online.",
      },
      {
        question: "What are the minimum system requirements?",
        answer: "For mobile: Android 6.0+ or iOS 12+. For desktop: Windows 10+, macOS 10.14+, or any modern Linux distribution. The app is optimized to run smoothly even on modest hardware.",
      },
      {
        question: "Is there a web version I can access from any browser?",
        answer: "Yes, you can access Palmshop from any modern web browser at app.palmshop.com. This is great for quick access from any computer or for remote monitoring.",
      },
    ],
  },
  {
    title: "Hardware & Devices",
    faqs: [
      {
        question: "What hardware do you sell?",
        answer: "We offer a complete range: dedicated POS terminals with built-in printers, smartphones, tablets, laptops, desktops, and thermal receipt printers. All devices come with Palmshop pre-installed and configured.",
      },
      {
        question: "Can I use my existing devices with Palmshop?",
        answer: "Absolutely! Palmshop works on your existing phones, tablets, and computers. Download from the App Store, Play Store, or our website to get started immediately.",
      },
      {
        question: "What printers are compatible with Palmshop?",
        answer: "Palmshop supports most Bluetooth and USB thermal printers (58mm and 80mm). We also sell printers that are tested and guaranteed to work perfectly with our software.",
      },
      {
        question: "Do devices come with a warranty?",
        answer: "Yes, all hardware purchased from us includes a minimum 1-year warranty. Our POS terminals come with extended support options available.",
      },
    ],
  },
  {
    title: "Pricing & Subscriptions",
    faqs: [
      {
        question: "Is there a free version of Palmshop?",
        answer: "Yes! Our Free plan is perfect for small vendors and getting started. It includes up to 100 products, basic reports, single device support, and offline mode — forever free.",
      },
      {
        question: "What's included in the Pro plan?",
        answer: "Pro ($19/month) includes unlimited products, up to 5 devices, real-time sync, multi-user access, remote monitoring, advanced analytics, and priority support.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle. No long-term contracts required.",
      },
      {
        question: "Do you offer discounts for annual subscriptions?",
        answer: "Yes! Annual subscriptions save you 20% compared to monthly billing. Contact our sales team for custom pricing for larger deployments.",
      },
    ],
  },
  {
    title: "Delivery & Setup",
    faqs: [
      {
        question: "Do you offer delivery services?",
        answer: "Yes, we offer delivery nationwide. Free delivery on orders over $200. Standard delivery takes 3-5 business days, with express options available.",
      },
      {
        question: "Can you help set up the system at my location?",
        answer: "Absolutely! We offer professional on-site setup services. Our technicians will install, configure, and train your staff on using Palmshop effectively.",
      },
      {
        question: "What does the setup service include?",
        answer: "Our setup service includes hardware installation, software configuration, product catalog import, printer setup, staff account creation, and hands-on training for your team.",
      },
      {
        question: "How long does delivery and setup take?",
        answer: "Standard delivery is 3-5 business days. Setup appointments are usually available within 1-2 days of delivery. Express options can get you running in 24-48 hours.",
      },
    ],
  },
  {
    title: "Support & Training",
    faqs: [
      {
        question: "What support options are available?",
        answer: "Free plan users get community support. Pro and Business plans include priority email and chat support. Business plan includes dedicated phone support and a success manager.",
      },
      {
        question: "Do you provide training?",
        answer: "Yes! We offer video tutorials, documentation, and live training sessions. Business plan customers get personalized onboarding and ongoing training as needed.",
      },
      {
        question: "How do I contact support?",
        answer: "You can reach us via WhatsApp for quick questions, email for detailed inquiries, or phone for urgent matters. Business hours are 8 AM - 8 PM, 7 days a week.",
      },
      {
        question: "Is there a user community?",
        answer: "Yes, join our community of thousands of Palmshop users to share tips, get help, and connect with other business owners using our platform.",
      },
    ],
  },
];

const FAQ = () => {
  const whatsappNumber = "1234567890";
  const phoneNumber = "+1234567890";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero-bg" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Palmshop software, hardware, 
              pricing, and support.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {faqCategories.map((category) => (
              <div key={category.title} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 gradient-bg rounded-full" />
                  {category.title}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6 card-shadow"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg border-0" asChild>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I have a question about Palmshop.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
