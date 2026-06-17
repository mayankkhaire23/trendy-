import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { motion } from "framer-motion";
import { ChefHat, Sofa, Monitor, Layers, PaintBucket, Hammer, Home, CheckSquare } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const services = [
  {
    title: "Modular Kitchen Design",
    desc: "Bespoke culinary spaces designed for efficiency and elegance. We use premium marine plywood, soft-close hardware, and high-gloss finishes to create the kitchen of your dreams.",
    icon: ChefHat,
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
  },
  {
    title: "Kitchen Trolley Solutions",
    desc: "Optimize your existing space with intelligent trolley systems. Designed for heavy Indian cooking, our SS 304 grade trolleys ensure durability and smooth operation.",
    icon: CheckSquare,
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
  },
  {
    title: "Custom Wardrobes",
    desc: "From sliding doors to walk-in closets, we design wardrobes that maximize storage while looking stunning. Choose from acrylic, lacquered glass, or rich veneer finishes.",
    icon: Layers,
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80"
  },
  {
    title: "TV Units & Consoles",
    desc: "Modern entertainment centers that hide clutter and highlight your screen. Seamless wire management and ambient backlighting included.",
    icon: Monitor,
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80"
  },
  {
    title: "Bedroom Furniture",
    desc: "Create your personal sanctuary with custom beds, side tables, and dressers perfectly matched to your room's aesthetic.",
    icon: Sofa,
    img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80"
  },
  {
    title: "Office Furniture",
    desc: "Ergonomic workstations, storage cabinets, and conference tables for home offices and commercial spaces that boost productivity.",
    icon: Hammer,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    title: "Complete Interior Design",
    desc: "Turnkey interior solutions for 2BHK, 3BHK and villas. We handle everything from civil work to false ceiling, painting, and final furnishing.",
    icon: Home,
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
  },
  {
    title: "Custom Manufacturing",
    desc: "Have a specific design in mind? Bring us your reference images and our expert craftsmen will bring it to life with precision.",
    icon: PaintBucket,
    img: "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=800&q=80"
  }
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services | Trendy Kitchens Nashik";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        {/* Header */}
        <div className="container mx-auto px-4 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive interior solutions tailored to your lifestyle. We blend functionality with high-end aesthetics.
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-sm shadow-xl">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href="/contact" className="inline-block border border-foreground text-foreground px-8 py-3 font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors text-sm">
                    Enquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}