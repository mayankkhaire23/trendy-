import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { useCounter } from "@/hooks/use-counter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle, ChefHat, Monitor, Star, ShieldCheck, HeartHandshake, PenTool, Hammer, Layers } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function StatItem({ end, label, suffix = "+" }: { end: number, label: string, suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(end, 2000, ref);
  
  return (
    <div ref={ref} className="text-center p-6 bg-white shadow-sm border border-gray-100 rounded-sm">
      <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium tracking-wider uppercase text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "Trendy Kitchens Trolley & Furniture Nashik | Modular Kitchens & Custom Furniture";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80" 
              alt="Luxury Kitchen" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 text-center mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 border border-white/30 bg-white/10 backdrop-blur-md text-white text-xs tracking-[0.2em] uppercase mb-6 rounded-full">
                Premium Interiors in Nashik
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-5xl mx-auto drop-shadow-lg">
                Transform Your Home With <span className="text-primary">Premium Modular Kitchens</span> & Furniture
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
                Custom-designed kitchens, wardrobes, and furniture crafted with precision. Nashik's answer to luxury living.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                 <Link href="/contact" className="bg-primary text-primary-foreground px-8 py-4 font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors text-sm text-center">
                   Get Free Consultation
                 </Link>
                 <Link href="/portfolio" className="border border-white bg-white/10 backdrop-blur-sm text-white px-8 py-4 font-medium uppercase tracking-wider hover:bg-white hover:text-foreground transition-colors text-sm text-center">
                   View Projects
                 </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 bg-gray-50 border-b border-gray-100 relative z-30 -mt-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
              <StatItem end={500} label="Projects" />
              <StatItem end={15} label="Years Experience" />
              <StatItem end={1000} label="Happy Families" />
              <StatItem end={50} label="Craftsmen" />
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-24 container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Masterpieces for Every Room</h2>
            <p className="text-muted-foreground text-lg">We don't just build furniture; we craft lifestyles. Explore our range of premium custom interior solutions.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: "Modular Kitchens", desc: "Sleek, highly functional kitchens customized to your cooking style.", icon: ChefHat, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
              { title: "Kitchen Trolleys", desc: "Durable and smooth trolley systems optimizing your storage space.", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
              { title: "Wardrobes", desc: "Floor-to-ceiling luxury wardrobes with smart organization.", icon: Layers, img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80" },
              { title: "TV Units", desc: "Contemporary entertainment centers that become the focal point.", icon: Monitor, img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80" },
            ].map((service, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                <div className="relative h-64 mb-6 overflow-hidden rounded-sm">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <Link href="/services" className="text-primary text-sm font-semibold uppercase tracking-wider flex items-center group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block border-b-2 border-primary text-primary font-medium pb-1 hover:text-foreground hover:border-foreground transition-colors uppercase tracking-wider text-sm">
              View All Services
            </Link>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Our Work</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">A glimpse into the spaces we've transformed across Nashik.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {/* Large featured card */}
              <motion.div variants={fadeInUp} className="md:col-span-7 group relative h-[420px] overflow-hidden rounded-sm cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80"
                  alt="L-Shape Luxury Kitchen"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-2 block">Luxury Kitchen</span>
                  <h3 className="text-white text-2xl font-serif font-bold">L-Shape Island Kitchen</h3>
                  <p className="text-white/70 text-sm mt-2">Gangapur Road, Nashik</p>
                </div>
              </motion.div>

              {/* Two stacked cards */}
              <motion.div variants={staggerContainer} className="md:col-span-5 flex flex-col gap-6">
                <motion.div variants={fadeInUp} className="group relative h-[198px] overflow-hidden rounded-sm cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=700&q=80"
                    alt="Premium Wardrobe"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-1 block">Wardrobe</span>
                    <h3 className="text-white text-lg font-serif font-bold">Floor-to-Ceiling Wardrobe</h3>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="group relative h-[198px] overflow-hidden rounded-sm cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=700&q=80"
                    alt="Modern TV Unit"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-1 block">TV Unit</span>
                    <h3 className="text-white text-lg font-serif font-bold">Contemporary Entertainment Wall</h3>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="mt-12 text-center">
              <a href="/portfolio" className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-3 font-medium uppercase tracking-wider hover:bg-foreground hover:text-white transition-colors text-sm">
                View Full Portfolio <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-foreground text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:w-1/3"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Why Nashik Trusts Us</h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  We bring South Mumbai luxury to Nashik homes at accessible prices. Every detail is meticulously planned and flawlessly executed.
                </p>
                <Link href="/about" className="bg-primary text-primary-foreground px-8 py-4 font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors text-sm inline-block">
                  Discover Our Story
                </Link>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {[
                  { title: "Premium Materials", desc: "Marine-grade plywood and premium laminates that last decades." },
                  { title: "Custom Designs", desc: "100% personalized to your space, workflow, and aesthetic preferences." },
                  { title: "Expert Installation", desc: "Flawless finish by our in-house team of master craftsmen." },
                  { title: "On-Time Delivery", desc: "Strict adherence to timelines. We respect your schedule." },
                  { title: "Transparent Pricing", desc: "Honest quotes with no hidden surprises or last-minute additions." },
                  { title: "After Sales Support", desc: "Comprehensive warranty and prompt maintenance service." }
                ].map((feature, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-serif font-semibold mb-2">{feature.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Our Seamless Process</h2>
              <p className="text-muted-foreground text-lg">From concept to handover, we make transforming your home completely stress-free.</p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10"
              >
                {[
                  { step: "01", title: "Consultation", icon: HeartHandshake },
                  { step: "02", title: "Design 3D", icon: PenTool },
                  { step: "03", title: "Manufacturing", icon: ShieldCheck },
                  { step: "04", title: "Installation", icon: Hammer },
                  { step: "05", title: "Handover", icon: Star }
                ].map((step, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center bg-white p-6 rounded-sm shadow-sm md:bg-transparent md:p-0 md:shadow-none">
                    <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center mb-4 shadow-md relative">
                      <step.icon className="w-6 h-6 text-primary" />
                      <div className="absolute -top-2 -right-2 bg-foreground text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="text-lg font-serif font-bold">{step.title}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Client Stories</h2>
            <p className="text-muted-foreground text-lg">Hear what families across Nashik say about their new spaces.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {[
              { name: "Rahul Deshmukh", loc: "College Road, Nashik", text: "The quality is simply unmatched. They delivered exactly what was shown in the 3D designs. The soft-close hardware and finish are premium." },
              { name: "Priya Kulkarni", loc: "Indira Nagar, Nashik", text: "We recently got our kitchen and wardrobes done. The team is highly professional, maintained cleanliness, and completed work before the deadline." },
              { name: "Sanjay Patil", loc: "Gangapur Road, Nashik", text: "Transformed our 15-year-old kitchen into a modern masterpiece. The acrylic finish is flawless and the space utilization is genius." }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-gray-50 p-8 rounded-sm border border-gray-100">
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 italic">"{review.text}"</p>
                <div>
                  <h5 className="font-serif font-bold text-lg">{review.name}</h5>
                  <p className="text-sm text-muted-foreground">{review.loc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-foreground text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Accordion type="single" collapsible className="w-full">
                {[
                  { q: "How much time does it take to install a modular kitchen?", a: "Typically, manufacturing takes 15-20 days at our facility, and installation at your home takes just 2-3 days, minimizing disruption." },
                  { q: "Do you provide customized designs?", a: "Yes, 100%. Our designers create 3D renders based on your exact floor plan, lifestyle needs, and aesthetic preferences before any work begins." },
                  { q: "What materials do you use?", a: "We primarily use BWP (Boiling Water Proof) Marine Plywood for wet areas like kitchens, paired with premium laminates, acrylics, or PU finishes. All hardware is from reputed brands like Hettich or Blum." },
                  { q: "Do you offer a warranty?", a: "Yes, we provide a comprehensive warranty of up to 10 years on manufacturing defects and hardware, depending on the materials chosen." },
                  { q: "Do you take up full home interior projects?", a: "Absolutely. While modular kitchens and wardrobes are our specialty, we undertake complete end-to-end residential interior projects across Nashik." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/20">
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white p-8 md:p-16 max-w-5xl mx-auto shadow-xl flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Ready to upgrade your home?</h2>
                <p className="text-muted-foreground mb-8">Book a free consultation with our design experts today and get a custom quote for your space.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm font-medium"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Free Site Visit</li>
                  <li className="flex items-center text-sm font-medium"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Custom 3D Design</li>
                  <li className="flex items-center text-sm font-medium"><CheckCircle className="w-5 h-5 text-primary mr-2" /> Transparent Estimate</li>
                </ul>
              </div>
              <div className="md:w-1/2 w-full">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" />
                  <textarea placeholder="Tell us about your requirement" rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                  <button type="submit" className="w-full bg-primary text-primary-foreground font-medium uppercase tracking-wider py-4 hover:bg-primary/90 transition-colors">
                    Request Call Back
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}