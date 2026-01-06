import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Target, Heart, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";

const leaders = [
  {
    name: "Pastor James Mensah",
    role: "General Overseer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Elder Grace Owusu",
    role: "Associate Pastor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Deacon Samuel Asante",
    role: "Church Administrator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Deaconess Martha Boateng",
    role: "Women's Leader",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
];

const beliefs = [
  "We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit.",
  "We believe in the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His miracles.",
  "We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a godly life.",
  "We believe in the resurrection of both the saved and the lost.",
  "We believe in the spiritual unity of believers in our Lord Jesus Christ.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-holy text-white relative">
           <div className="absolute inset-0">
              <img
                src={heroImage}
                alt="Church sanctuary"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-hero-overlay" />
            </div>
          <div className="container mx-auto px-6 relative">
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Our Story & Mission
              </h1>
              <p className="text-white/80 text-lg">
                Learn about our history, vision, and the leadership that guides our church family.
              </p>
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our History
                </h2>
                <p className="text-muted-foreground mb-4">
                  Christ Apostolic Church International has a rich heritage spanning decades of faithful 
                  service to God and community. Our Bubiashie Central assembly stands as a beacon of 
                  hope in the heart of Accra, Ghana.
                </p>
                <p className="text-muted-foreground mb-4">
                  Founded on the principles of prayer, faith, and evangelism, we have grown from a 
                  small gathering to a vibrant congregation serving hundreds of families.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to build on the foundation laid by our founders, reaching new 
                  generations with the timeless message of the Gospel.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: Users, label: "1000+", desc: "Members" },
                  { icon: Target, label: "25+", desc: "Years of Ministry" },
                  { icon: Heart, label: "50+", desc: "Outreach Programs" },
                  { icon: BookOpen, label: "6", desc: "Active Ministries" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-church-cream rounded-2xl p-6 text-center">
                    <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                    <p className="font-serif text-3xl font-bold text-foreground">{stat.label}</p>
                    <p className="text-muted-foreground text-sm">{stat.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-church-cream">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-church-gold/10 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a Spirit-filled, Christ-centered community that transforms lives, 
                  builds strong families, and impacts nations with the Gospel of Jesus Christ.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <div className="w-14 h-14 rounded-xl bg-church-gold/10 flex items-center justify-center mb-5">
                  <Heart className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To worship God, win souls, disciple believers, and demonstrate the love of 
                  Christ through service to our community and beyond.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statement of Faith */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">
                Statement of Faith
              </h2>
              <div className="space-y-4">
                {beliefs.map((belief, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-church-cream rounded-xl justify-start items-center">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-foreground">{belief}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-church-light-blue">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block px-4 py-1.5 bg-red-500 text-white rounded-full text-sm font-medium mb-4">
                Our Leadership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Meet Our Leaders
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft text-center"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif font-semibold text-lg text-foreground">
                      {leader.name}
                    </h3>
                    <p className="text-red-500 text-sm">{leader.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
