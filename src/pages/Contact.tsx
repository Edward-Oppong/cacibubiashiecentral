import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Youtube, Instagram, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

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
                Get In Touch
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-white/80 text-lg">
                We'd love to hear from you. Reach out for inquiries, prayer requests, or to plan your visit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-church-cream">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                  Visit Our Church
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-church-gold/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-church-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        Christ Apostolic Church International<br />
                        Bubiashie Central, Accra, Ghana
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-church-gold/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-church-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+233 XX XXX XXXX</p>
                      <p className="text-muted-foreground">+233 XX XXX XXXX</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-church-gold/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-church-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">info@cacibubiashie.org</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-church-gold/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-church-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Service Times</h4>
                      <p className="text-muted-foreground">Sunday: 8:00 AM & 10:30 AM</p>
                      <p className="text-muted-foreground">Wednesday: 6:00 PM</p>
                      <p className="text-muted-foreground">Friday: 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {[
                      { icon: Facebook, label: "Facebook" },
                      { icon: Youtube, label: "YouTube" },
                      { icon: Instagram, label: "Instagram" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href="#"
                        className="w-12 h-12 rounded-xl bg-church-deep-blue text-white flex items-center justify-center hover:bg-church-gold transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-10 bg-church-light-blue rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-church-gold mx-auto mb-3" />
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <div className="bg-white rounded-2xl p-12 shadow-soft text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll respond as soon as possible.
                    </p>
                    <Button 
                      variant="churchOutline"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-soft space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          type="text"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Write your message here..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" variant="churchPrimary" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
