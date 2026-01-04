import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Send, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const testimonies = [
  {
    id: 1,
    name: "Sarah A.",
    testimony: "God healed me from a chronic illness after the church prayed for me. I am forever grateful for this community of faith!",
    date: "Dec 2025",
  },
  {
    id: 2,
    name: "Emmanuel K.",
    testimony: "Through the men's ministry, I found deliverance from addiction and restored my relationship with my family. Praise God!",
    date: "Nov 2025",
  },
  {
    id: 3,
    name: "Grace M.",
    testimony: "The Lord blessed me with a job after 8 months of unemployment. The prayer team stood with me, and God answered!",
    date: "Oct 2025",
  },
];

export default function PrayerPage() {
  const [prayerForm, setPrayerForm] = useState({
    name: "",
    email: "",
    request: "",
    isAnonymous: false,
  });
  const [testimonyForm, setTestimonyForm] = useState({
    name: "",
    email: "",
    testimony: "",
  });
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);
  const [testimonySubmitted, setTestimonySubmitted] = useState(false);
  const { toast } = useToast();

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrayerSubmitted(true);
    toast({
      title: "Prayer Request Submitted",
      description: "Our prayer team will lift your request to God.",
    });
  };

  const handleTestimonySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTestimonySubmitted(true);
    toast({
      title: "Testimony Submitted",
      description: "Thank you for sharing what God has done!",
    });
  };

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
              <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                Prayer & Testimonies
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                We're Here to Pray With You
              </h1>
              <p className="text-white/80 text-lg">
                Submit your prayer request and share your testimony. Our prayer team is ready to stand with you in faith.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Prayer Request Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-church-gold/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-church-gold" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Prayer Request
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Whatever you're going through, you don't have to face it alone. 
                  Share your prayer request and our dedicated prayer team will intercede on your behalf.
                </p>

                {prayerSubmitted ? (
                  <div className="bg-church-cream rounded-2xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      Request Received
                    </h3>
                    <p className="text-muted-foreground">
                      Our prayer team will lift your request to God. May you experience His peace and provision.
                    </p>
                    <Button 
                      variant="churchOutline" 
                      className="mt-4"
                      onClick={() => setPrayerSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handlePrayerSubmit} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="anonymous"
                        checked={prayerForm.isAnonymous}
                        onChange={(e) => setPrayerForm({ ...prayerForm, isAnonymous: e.target.checked })}
                        className="w-5 h-5 rounded border-border"
                      />
                      <label htmlFor="anonymous" className="text-foreground">
                        Submit anonymously
                      </label>
                    </div>
                    {!prayerForm.isAnonymous && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Your Name
                          </label>
                          <Input
                            type="text"
                            value={prayerForm.name}
                            onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email (optional)
                          </label>
                          <Input
                            type="email"
                            value={prayerForm.email}
                            onChange={(e) => setPrayerForm({ ...prayerForm, email: e.target.value })}
                            placeholder="Enter your email"
                          />
                        </div>
                      </>
                    )}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Prayer Request *
                      </label>
                      <Textarea
                        value={prayerForm.request}
                        onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                        placeholder="Share your prayer request..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" variant="churchPrimary" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Prayer Request
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Testimony Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-church-gold/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-church-gold" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Share Testimony
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Has God done something amazing in your life? Share your testimony to encourage others and glorify God!
                </p>

                {testimonySubmitted ? (
                  <div className="bg-church-cream rounded-2xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      Testimony Submitted
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for sharing! Your testimony may be featured after review.
                    </p>
                    <Button 
                      variant="churchOutline" 
                      className="mt-4"
                      onClick={() => setTestimonySubmitted(false)}
                    >
                      Share Another Testimony
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleTestimonySubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        type="text"
                        value={testimonyForm.name}
                        onChange={(e) => setTestimonyForm({ ...testimonyForm, name: e.target.value })}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={testimonyForm.email}
                        onChange={(e) => setTestimonyForm({ ...testimonyForm, email: e.target.value })}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Testimony *
                      </label>
                      <Textarea
                        value={testimonyForm.testimony}
                        onChange={(e) => setTestimonyForm({ ...testimonyForm, testimony: e.target.value })}
                        placeholder="Share what God has done..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" variant="gold" className="w-full">
                      <Heart className="w-4 h-4 mr-2" />
                      Submit Testimony
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Testimonies */}
        <section className="py-20 bg-church-cream">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block px-4 py-1.5 bg-church-gold/10 text-church-gold rounded-full text-sm font-medium mb-4">
                Praise Reports
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                What God Has Done
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonies.map((testimony, index) => (
                <motion.div
                  key={testimony.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-church-gold/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-church-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimony.name}</p>
                      <p className="text-sm text-muted-foreground">{testimony.date}</p>
                    </div>
                  </div>
                  <p className="text-foreground italic">"{testimony.testimony}"</p>
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
