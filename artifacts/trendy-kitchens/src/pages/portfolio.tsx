import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";

const categories = ["All", "Modern Kitchens", "Luxury Kitchens", "Wardrobes", "TV Units", "Living Room"];

const projects = [
  { id: 1, title: "Acrylic Finish Kitchen", category: "Modern Kitchens", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80" },
  { id: 2, title: "Veneer TV Unit", category: "TV Units", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" },
  { id: 3, title: "L-Shape Luxury Kitchen", category: "Luxury Kitchens", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 4, title: "Sliding Wardrobe", category: "Wardrobes", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80" },
  { id: 5, title: "Minimalist Living Space", category: "Living Room", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
  { id: 6, title: "Island Kitchen Design", category: "Luxury Kitchens", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
  { id: 7, title: "Walk-in Closet", category: "Wardrobes", img: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80" },
  { id: 8, title: "Compact Modern Kitchen", category: "Modern Kitchens", img: "https://images.unsplash.com/photo-1588854337221-4cfb6136db07?w=800&q=80" },
  { id: 9, title: "Entertainment Wall", category: "TV Units", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Portfolio | Trendy Kitchens Nashik";
  }, []);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Our Portfolio</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our diverse range of custom interior projects. Every space is a testament to our craftsmanship and attention to detail.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded-full ${
                  activeCategory === cat 
                    ? "bg-foreground text-white" 
                    : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group relative h-[350px] overflow-hidden rounded-sm cursor-pointer bg-gray-100"
                  onClick={() => setSelectedImage(project.img)}
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary font-medium text-sm tracking-widest uppercase mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-serif font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {project.title}
                    </h3>
                    <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Project View"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}