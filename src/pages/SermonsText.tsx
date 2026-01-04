import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Clock, User, Download, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const textSermons = [
  {
    id: 1,
    title: "The Armor of God: Standing Firm in Faith",
    preacher: "Pastor James Mensah",
    date: "Jan 2, 2026",
    readTime: "12 min read",
    topic: "Spiritual Warfare",
    excerpt: "In Ephesians 6, Paul describes the spiritual armor we need to stand against the enemy...",
  },
  {
    id: 2,
    title: "Grace Upon Grace: Understanding God's Favor",
    preacher: "Elder Grace Owusu",
    date: "Dec 30, 2025",
    readTime: "10 min read",
    topic: "Grace",
    excerpt: "From His fullness we have all received, grace upon grace. What does this mean for us...",
  },
  {
    id: 3,
    title: "The Fruit of the Spirit: A Life Transformed",
    preacher: "Pastor James Mensah",
    date: "Dec 27, 2025",
    readTime: "15 min read",
    topic: "Holy Spirit",
    excerpt: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness...",
  },
  {
    id: 4,
    title: "Finding Rest in Christ",
    preacher: "Elder Grace Owusu",
    date: "Dec 23, 2025",
    readTime: "8 min read",
    topic: "Rest",
    excerpt: "Come to me, all who labor and are heavy laden, and I will give you rest...",
  },
  {
    id: 5,
    title: "The Power of Forgiveness",
    preacher: "Pastor James Mensah",
    date: "Dec 20, 2025",
    readTime: "11 min read",
    topic: "Forgiveness",
    excerpt: "Forgiveness is not just an option for the believer—it is a command and a pathway to freedom...",
  },
  {
    id: 6,
    title: "Walking in Wisdom",
    preacher: "Elder Grace Owusu",
    date: "Dec 17, 2025",
    readTime: "9 min read",
    topic: "Wisdom",
    excerpt: "If any of you lacks wisdom, let him ask of God, who gives generously to all...",
  },
];

const topics = ["All Topics", "Spiritual Warfare", "Grace", "Holy Spirit", "Rest", "Forgiveness", "Wisdom"];

export default function TextSermonsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All Topics");

  const filteredSermons = textSermons.filter((sermon) => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = selectedTopic === "All Topics" || sermon.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-holy text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 text-church-gold rounded-full text-sm font-medium mb-4">
                Text Sermons
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Read Our Sermons
              </h1>
              <p className="text-white/80 text-lg">
                Dive deep into the Word with our collection of written sermons for personal study.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b border-border sticky top-20 z-30">
          <div className="container mx-auto px-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search sermons..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                <Filter className="w-5 h-5 text-muted-foreground shrink-0" />
                {topics.map((topic) => (
                  <button
                    key={topic}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedTopic === topic
                        ? "bg-church-gold text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sermons List */}
        <section className="py-16 bg-church-cream">
          <div className="container mx-auto px-6">
            {filteredSermons.length > 0 ? (
              <div className="space-y-6 max-w-4xl mx-auto">
                {filteredSermons.map((sermon, index) => (
                  <motion.article
                    key={sermon.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-card transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-church-gold/10 flex items-center justify-center group-hover:bg-church-gold transition-colors">
                          <BookOpen className="w-8 h-8 text-church-gold group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 bg-church-light-blue text-church-deep-blue rounded-full text-xs font-medium mb-3">
                          {sermon.topic}
                        </span>
                        <h3 className="font-serif font-semibold text-xl text-foreground mb-2 group-hover:text-church-gold transition-colors">
                          {sermon.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{sermon.excerpt}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            {sermon.preacher}
                          </span>
                          <span>{sermon.date}</span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {sermon.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="shrink-0 flex sm:flex-col gap-2">
                        <Button variant="churchOutline" size="sm">
                          Read
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No sermons found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Prefer to Watch?
            </h2>
            <p className="text-muted-foreground mb-6">
              Watch our video sermons for a more immersive experience.
            </p>
            <Button variant="churchPrimary" size="lg" asChild>
              <Link to="/sermons/video">Browse Video Sermons</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
