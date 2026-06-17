import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Trendy Kitchens Nashik";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Let's Talk Design</h1>
            <p className="text-muted-foreground text-lg">
              Ready to start your project? Get in touch with our experts for a free consultation and estimate.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/3"
            >
              <div className="bg-foreground text-white p-10 rounded-sm h-full">
                <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin className="text-primary mt-1 mr-4 shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Showroom Address</h4>
                      <p className="text-white/70 leading-relaxed text-sm">
                        123 Furniture Market, College Road,<br />
                        Nashik, Maharashtra 422005
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-primary mt-1 mr-4 shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Phone Number</h4>
                      <p className="text-white/70 leading-relaxed text-sm">+91 98765 43210</p>
                      <p className="text-white/70 leading-relaxed text-sm">+91 99887 76655</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-primary mt-1 mr-4 shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Email Address</h4>
                      <p className="text-white/70 leading-relaxed text-sm">hello@trendykitchens.in</p>
                      <p className="text-white/70 leading-relaxed text-sm">sales@trendykitchens.in</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-primary mt-1 mr-4 shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold mb-1">Working Hours</h4>
                      <p className="text-white/70 leading-relaxed text-sm">Monday - Saturday</p>
                      <p className="text-white/70 leading-relaxed text-sm">10:00 AM - 8:00 PM</p>
                      <p className="text-white/70 leading-relaxed text-sm mt-2 italic">Sunday Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-2/3"
            >
              <div className="bg-white p-8 md:p-12 shadow-lg border border-gray-100 rounded-sm">
                <h3 className="text-3xl font-serif font-bold text-foreground mb-6">Send us a message</h3>
                <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" placeholder="+91" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Service Required</label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors text-foreground">
                      <option value="">Select a service...</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="wardrobe">Wardrobes</option>
                      <option value="interior">Complete Interior</option>
                      <option value="other">Other Furniture</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="w-full md:w-auto bg-primary text-primary-foreground px-10 py-4 font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
          
          {/* Map */}
          <div className="mt-16 max-w-6xl mx-auto h-[400px] bg-gray-200 rounded-sm overflow-hidden border border-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.38706346766!2d73.7210793!3d19.9911107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb007137f90f%3A0x8e83344e45d94df7!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            />
            <div className="absolute inset-0 pointer-events-none border border-black/5" />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}