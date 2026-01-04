import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Play, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SermonsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-holy text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 text-church-gold rounded-full text-sm font-medium mb-4">
                Sermons
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Nourish Your Soul
              </h1>
              <p className="text-white/80 text-lg mb-10">
                Access our library of inspiring sermons. Watch, listen, or read messages 
                that will strengthen your faith and guide your walk with Christ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/sermons/video" className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Video Sermons
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/sermons/text" className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Text Sermons
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Options Grid */}
        <section className="py-20 bg-church-cream">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link to="/sermons/video" className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300">
                    <div className="aspect-video bg-church-deep-blue flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-church-gold/20 flex items-center justify-center group-hover:bg-church-gold transition-colors">
                        <Play className="w-10 h-10 text-church-gold group-hover:text-white transition-colors ml-1" />
                      </div>
                    </div>
                    <div className="p-8 text-center">
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-church-gold transition-colors">
                        Video Sermons
                      </h3>
                      <p className="text-muted-foreground">
                        Watch our latest sermons and experience powerful worship moments.
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Link to="/sermons/text" className="block group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300">
                    <div className="aspect-video bg-church-gold flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors">
                        <BookOpen className="w-10 h-10 text-white group-hover:text-church-gold transition-colors" />
                      </div>
                    </div>
                    <div className="p-8 text-center">
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-church-gold transition-colors">
                        Text Sermons
                      </h3>
                      <p className="text-muted-foreground">
                        Read and study our written sermons for deeper spiritual insight.
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
