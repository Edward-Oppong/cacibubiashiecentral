import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Heart, Gift, CreditCard, Smartphone, Building, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const givingTypes = [
  { id: "tithe", label: "Tithe", icon: Heart, description: "Honor God with your firstfruits" },
  { id: "offering", label: "Offering", icon: Gift, description: "Give generously from your heart" },
  { id: "seed", label: "Seed", icon: CreditCard, description: "Plant seeds for your harvest" },
  { id: "project", label: "Building Project", icon: Building, description: "Support church development" },
];

const paymentMethods = [
  { id: "momo", label: "Mobile Money", icon: Smartphone },
  { id: "card", label: "Card Payment", icon: CreditCard },
  { id: "bank", label: "Bank Transfer", icon: Building },
];

export default function GivePage() {
  const [selectedType, setSelectedType] = useState("tithe");
  const [selectedMethod, setSelectedMethod] = useState("momo");
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Thank You for Your Generosity!",
      description: "Your giving makes a difference in God's kingdom.",
    });
  };

  const presetAmounts = ["50", "100", "200", "500", "1000"];

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
                Give Online
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Partner with Us in Kingdom Work
              </h1>
              <p className="text-white/80 text-lg">
                Your generous giving enables us to spread the Gospel, support missions, 
                and transform lives. Every gift makes a difference.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Giving Form */}
        <section className="py-20 bg-church-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-12 shadow-card text-center"
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    Thank You!
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Your generosity is a blessing to our church and community. 
                    May the Lord bless you abundantly!
                  </p>
                  <Button 
                    variant="churchPrimary" 
                    size="lg"
                    onClick={() => {
                      setSubmitted(false);
                      setAmount("");
                    }}
                  >
                    Give Again
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-3xl p-8 sm:p-12 shadow-card"
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Giving Type */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                        Select Giving Type
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {givingTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setSelectedType(type.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              selectedType === type.id
                                ? "border-church-gold bg-church-gold/5"
                                : "border-border hover:border-church-gold/50"
                            }`}
                          >
                            <type.icon className={`w-6 h-6 mb-2 ${
                              selectedType === type.id ? "text-church-gold" : "text-muted-foreground"
                            }`} />
                            <p className="font-semibold text-foreground">{type.label}</p>
                            <p className="text-xs text-muted-foreground">{type.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Amount */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                        Enter Amount (GHS)
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        {presetAmounts.map((preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setAmount(preset)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                              amount === preset
                                ? "bg-church-gold text-white"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            ₵{preset}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                          ₵
                        </span>
                        <Input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="Other amount"
                          className="pl-10 h-14 text-lg"
                          required
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                        Payment Method
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setSelectedMethod(method.id)}
                            className={`p-4 rounded-xl border-2 text-center transition-all ${
                              selectedMethod === method.id
                                ? "border-church-gold bg-church-gold/5"
                                : "border-border hover:border-church-gold/50"
                            }`}
                          >
                            <method.icon className={`w-6 h-6 mx-auto mb-2 ${
                              selectedMethod === method.id ? "text-church-gold" : "text-muted-foreground"
                            }`} />
                            <p className="text-sm font-medium text-foreground">{method.label}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <Button type="submit" variant="gold" size="xl" className="w-full">
                      Give ₵{amount || "0"}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Your transaction is secure and encrypted.
                    </p>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Scripture */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="max-w-2xl mx-auto">
              <p className="font-serif text-2xl text-foreground italic mb-4">
                "Each of you should give what you have decided in your heart to give, 
                not reluctantly or under compulsion, for God loves a cheerful giver."
              </p>
              <cite className="text-church-gold font-medium">— 2 Corinthians 9:7</cite>
            </blockquote>
          </div>
        </section>

        {/* Bank Details */}
        <section className="py-16 bg-church-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-soft text-center">
              <Building className="w-12 h-12 text-church-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Bank Transfer Details
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Bank:</strong> Ghana Commercial Bank</p>
                <p><strong>Account Name:</strong> Christ Apostolic Church International</p>
                <p><strong>Account Number:</strong> XXXX-XXXX-XXXX</p>
                <p><strong>Branch:</strong> Bubiashie</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
