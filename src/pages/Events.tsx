import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "New Year Prayer & Fasting",
    date: "Jan 5-12, 2026",
    time: "6:00 AM - 6:00 PM Daily",
    location: "Church Auditorium",
    description: "Start the year with dedicated prayer and fasting for breakthrough and divine direction. Join us for morning and evening prayer sessions.",
    category: "Prayer",
    featured: true,
  },
  {
    id: 2,
    title: "Youth Fellowship Night",
    date: "Jan 10, 2026",
    time: "5:00 PM - 8:00 PM",
    location: "Youth Hall",
    description: "An evening of worship, games, and fellowship for young people ages 13-25.",
    category: "Youth",
    featured: false,
  },
  {
    id: 3,
    title: "Marriage Enrichment Seminar",
    date: "Jan 17, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Conference Room",
    description: "Strengthen your marriage with biblical principles and practical guidance from experienced counselors.",
    category: "Family",
    featured: false,
  },
  {
    id: 4,
    title: "Women's Conference 2026",
    date: "Jan 24-25, 2026",
    time: "9:00 AM Each Day",
    location: "Main Auditorium",
    description: "A powerful gathering of women for worship, teaching, and empowerment. Theme: 'Walking in Purpose'",
    category: "Women",
    featured: true,
  },
  {
    id: 5,
    title: "Children's Vacation Bible School",
    date: "Feb 1-5, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Children's Wing",
    description: "Fun-filled week of Bible stories, crafts, games, and songs for children ages 4-12.",
    category: "Children",
    featured: false,
  },
  {
    id: 6,
    title: "Men's Breakfast Fellowship",
    date: "Feb 8, 2026",
    time: "7:00 AM - 9:00 AM",
    location: "Fellowship Hall",
    description: "Monthly gathering for men to fellowship, share testimonies, and grow together in faith.",
    category: "Men",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Prayer: "bg-blue-100 text-blue-700",
  Youth: "bg-purple-100 text-purple-700",
  Family: "bg-pink-100 text-pink-700",
  Women: "bg-rose-100 text-rose-700",
  Children: "bg-green-100 text-green-700",
  Men: "bg-amber-100 text-amber-700",
};

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-holy text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 text-church-gold rounded-full text-sm font-medium mb-4">
                Events & Programs
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Upcoming Events
              </h1>
              <p className="text-white/80 text-lg">
                Join us for worship, fellowship, and life-changing events. There's something for everyone!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 bg-church-cream">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-card transition-all duration-300 ${
                    event.featured ? "border-l-4 border-l-church-gold lg:col-span-2" : ""
                  }`}
                >
                  <div className={`flex flex-col ${event.featured ? "lg:flex-row lg:gap-8" : ""}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[event.category] || "bg-gray-100 text-gray-700"}`}>
                          {event.category}
                        </span>
                        {event.featured && (
                          <span className="px-3 py-1 bg-church-gold/10 text-church-gold rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-foreground mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{event.description}</p>
                    </div>
                    <div className={`${event.featured ? "lg:w-72 lg:border-l lg:border-border lg:pl-8" : ""}`}>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3 text-foreground">
                          <Calendar className="w-5 h-5 text-church-gold shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground">
                          <Clock className="w-5 h-5 text-church-gold shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-foreground">
                          <MapPin className="w-5 h-5 text-church-gold shrink-0" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button variant="churchPrimary" className="w-full mt-6">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Calendar className="w-16 h-16 text-church-gold mx-auto mb-6" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Never Miss an Event
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive updates about upcoming events, 
                programs, and special announcements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-church-gold"
                />
                <Button variant="gold">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
