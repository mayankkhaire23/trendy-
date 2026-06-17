import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { motion } from "framer-motion";
import { Award, Target, Users, Gem } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | Trendy Kitchens Nashik";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Header */}
        <div className="container mx-auto px-4 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Elevating Living Spaces in Nashik</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded with a vision to bring premium, factory-finished modular furniture to Nashik, Trendy Kitchens Trolley & Furniture has grown into the city's most trusted name in interior solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that luxury isn't just about appearance—it's about how a space feels and functions every single day. Our commitment to using marine-grade materials, German hardware, and precision manufacturing ensures your home looks beautiful for decades.
              </p>
            </div>
            <div className="md:w-1/2 w-full h-[400px] md:h-[600px] relative">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80" 
                alt="Our Workshop" 
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl hidden md:block">
                <div className="text-5xl font-serif font-bold text-primary mb-2">15+</div>
                <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars */}
        <section className="bg-foreground text-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Core Pillars</h2>
              <p className="text-white/70 max-w-2xl mx-auto">The principles that guide every project we undertake.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: "Uncompromising Quality", desc: "We never cut corners. From BWP plywood to edge-banding, we use only top-tier materials." },
                { icon: Target, title: "Precision Engineering", desc: "Factory-finished furniture manufactured on advanced machinery for millimeter-perfect fit." },
                { icon: Users, title: "Customer Centricity", desc: "Transparent pricing, strict timelines, and a dedicated project manager for your home." },
                { icon: Gem, title: "Functional Aesthetics", desc: "Designs that look like a magazine cover but work perfectly for heavy daily usage." }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-sm hover:bg-white/10 transition-colors"
                >
                  <pillar.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-serif font-bold mb-3">{pillar.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Ready to create your dream home?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Visit our showroom in Nashik or book a free site consultation to discuss your vision.
          </p>
          <Link href="/contact" className="bg-primary text-primary-foreground px-10 py-4 font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors inline-block">
            Contact Us Today
          </Link>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}