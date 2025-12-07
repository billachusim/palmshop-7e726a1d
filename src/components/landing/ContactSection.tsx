import { useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const whatsappNumber = "1234567890";
  const phoneNumber = "+1234567890";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get in{" "}
              <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about Palmshop? Need help choosing the right hardware? 
              We're here to help you succeed.
            </p>
            
            {/* Services highlight */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl card-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Free Delivery</h4>
                  <p className="text-xs text-muted-foreground">On orders over $200</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card rounded-xl card-shadow">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Setup Service</h4>
                  <p className="text-xs text-muted-foreground">Professional installation</p>
                </div>
              </div>
            </div>
            
            {/* Quick contact buttons */}
            <div className="space-y-4 mb-8">
              <Button
                size="lg"
                className="w-full sm:w-auto gradient-bg border-0"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi! I'm interested in Palmshop.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto sm:ml-3"
                asChild
              >
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </Button>
            </div>
            
            {/* Contact details */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@palmshop.com" className="hover:text-foreground transition-colors">
                  hello@palmshop.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <a href={`tel:${phoneNumber}`} className="hover:text-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>123 Business Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 card-shadow">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    className="bg-background"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-background"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input
                  type="text"
                  placeholder="How can we help?"
                  required
                  className="bg-background"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us more about your needs..."
                  rows={4}
                  required
                  className="bg-background resize-none"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full gradient-bg border-0"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
