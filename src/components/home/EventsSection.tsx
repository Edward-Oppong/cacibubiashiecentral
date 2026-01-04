import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    id: 1,
    title: "New Year Prayer & Fasting",
    date: "Jan 5-12, 2026",
    time: "6:00 AM - 6:00 PM Daily",
    location: "Church Auditorium",
    description: "Start the year with dedicated prayer and fasting for breakthrough and divine direction.",
    featured: true,
  },
  {
    id: 2,
    title: "Youth Fellowship Night",
    date: "Jan 10, 2026",
    time: "5:00 PM",
    location: "Youth Hall",
    description: "An evening of worship, games, and fellowship for young people.",
    featured: false,
  },
  {
    id: 3,
    title: "Marriage Enrichment Seminar",
    date: "Jan 17, 2026",
    time: "9:00 AM - 2:00 PM",
    location: "Conference Room",
    description: "Strengthen your marriage with biblical principles and practical guidance.",
    featured: false,
  },
];

const announcements = [
  {
    id: 1,
    title: "Church Building Offering",
    date: "Ongoing",
    category: "Finance",
  },
  {
    id: 2,
    title: "Choir Auditions Open",
    date: "Jan 15, 2026",
    category: "Ministry",
  },
  {
    id: 3,
    title: "Sunday School Registration",
    date: "Now Open",
    category: "Education",
  },
];

export function EventsSection() {
  return (
    <section className="py-20 lg:py-28 bg-church-light-blue">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Events Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="inline-block px-4 py-1.5 bg-church-gold/10 text-red-500 rounded-full text-sm font-medium mb-4">
                Upcoming Events
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Join Our Community Activities
              </h2>
            </motion.div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300 ${
                    event.featured ? "border-l-4 border-l-red-300" : ""
                  }`}
                >
                  {event.featured && (
                    <span className="inline-block px-3 py-1 bg-church-gold/10 text-red-500 rounded-full text-xs font-semibold mb-3">
                      Featured Event
                    </span>
                  )}
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-red-500" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-red-500" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-red-500" />
                      {event.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="churchOutline" size="lg" asChild>
                <Link to="/events" className="flex items-center gap-2">
                  View All Events
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Announcements Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="inline-block px-4 py-1.5 bg-church-deep-blue/10 text-church-deep-blue rounded-full text-sm font-medium mb-4">
                Announcements
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Stay Informed
              </h2>
            </motion.div>

            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block px-2 py-0.5 bg-muted text-red-500 rounded text-xs font-medium mb-2">
                        {announcement.category}
                      </span>
                      <h4 className="font-medium text-foreground transition-colors">
                        {announcement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {announcement.date}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-gradient-holy rounded-2xl p-6 text-white"
            >
              <h4 className="font-serif font-semibold text-xl mb-3">
                Need Prayer?
              </h4>
              <p className="text-white/80 text-sm mb-5">
                Submit your prayer request and our prayer team will intercede on your behalf.
              </p>
              <Button className="w-full bg-white/10" asChild>
                <Link to="/prayer">Submit Prayer Request</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
