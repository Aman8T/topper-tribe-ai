import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, Brain, Trophy, MessageCircle, Zap, ChevronRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveCounter = () => {
  const [count, setCount] = useState(14782);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="font-mono text-primary text-2xl md:text-4xl font-bold">
      {count.toLocaleString()}
    </span>
  );
};

const features = [
  { icon: Brain, title: "AI Error Diagnosis", desc: "Know exactly which concept you got wrong and why. Your mistakes become your roadmap.", color: "text-cyan-400" },
  { icon: Flame, title: "Question of the Day", desc: "One IIT-level problem daily. Maintain your streak. Build consistency.", color: "text-primary" },
  { icon: Trophy, title: "Weekly Contests", desc: "ELO-rated contests every Sunday. Compete with the best. Climb the ranks.", color: "text-primary" },
  { icon: MessageCircle, title: "WhatsApp Bot", desc: "Get your daily question on WhatsApp. Practice even without opening the app.", color: "text-emerald-400" },
  { icon: Zap, title: "Community Solutions", desc: "See how toppers solve problems. Learn multiple approaches. Upvote the best.", color: "text-primary" },
  { icon: Star, title: "Personalized Drills", desc: "AI identifies your weak chapters and creates targeted practice sets.", color: "text-cyan-400" },
];

const pricingTiers = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["50 problems/month", "Basic analytics", "Community solutions", "Question of the Day"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Core",
    price: "₹1,299",
    period: "/year",
    features: ["Unlimited problems", "AI Error Diagnosis", "Full analytics", "All PYQ sets", "Weekly contests", "Streak rewards"],
    cta: "Get Core",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹3,499",
    period: "/year",
    features: ["Everything in Core", "Predicted JEE Score", "1-on-1 AI Mentor", "WhatsApp Bot", "Priority support", "Olympiad problems", "Custom drill plans"],
    cta: "Go Pro",
    highlighted: false,
  },
];

const testimonials = [
  { name: "Aaryan S.", rank: "AIR 234, JEE Advanced 2024", quote: "CrackIt's AI diagnosis showed me I was losing 30% marks to silly errors. Fixed that, jumped 4000 ranks." },
  { name: "Priya M.", rank: "AIR 1,200, JEE Main 2024", quote: "The community solutions feature is gold. Seeing how toppers think changed my approach completely." },
  { name: "Rohan K.", rank: "99.8 percentile, JEE Main 2024", quote: "Daily questions + streak tracking kept me consistent for 8 months straight. That consistency cracked it." },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background bg-dot-pattern">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-syne font-bold text-xl text-foreground">CrackIt</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <Link to="/dashboard">
              <Button variant="outline" size="sm">Log In</Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm">Start Free</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <LiveCounter /> questions solved today
              </span>
            </div>

            <h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Train Like a <span className="text-gradient-amber">Topper.</span>
              <br />
              Think Like an <span className="text-gradient-cyan">IITian.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              The platform top 1000 rankers actually use. AI-powered problem solving, community discussions, 
              and analytics that turn your weaknesses into strengths.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="text-base px-8 py-6 glow-amber">
                  Start Free — No credit card needed
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#features">
                <Button variant="outline" size="lg" className="text-base px-8 py-6">
                  See Features
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm mb-2">Trusted by</p>
          <p className="font-syne text-3xl font-bold text-foreground">47,000+ JEE Aspirants</p>
          <p className="text-muted-foreground text-sm mt-2">across 200+ cities in India</p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-syne text-3xl md:text-4xl font-bold mb-4">Built for JEE Warriors</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Not another generic test series. Every feature is designed for the student who wants AIR under 1000.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors group"
              >
                <f.icon className={`w-10 h-10 mb-4 ${f.color}`} />
                <h3 className="font-syne text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-syne text-3xl font-bold text-center mb-12">Rank Improvements That Speak</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4 italic">"{t.quote}"</p>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-primary font-mono">{t.rank}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-syne text-3xl md:text-4xl font-bold mb-4">Invest in Your Rank</h2>
            <p className="text-muted-foreground">Less than the cost of one coaching module.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`p-6 rounded-xl border ${
                  tier.highlighted
                    ? "border-primary bg-primary/5 glow-amber"
                    : "border-border bg-card"
                } flex flex-col`}
              >
                {tier.highlighted && (
                  <span className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">Most Popular</span>
                )}
                <h3 className="font-syne text-xl font-bold text-foreground">{tier.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="font-syne text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/dashboard">
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 border-t border-border">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-syne text-3xl md:text-4xl font-bold mb-4">Ready to Crack It?</h2>
          <p className="text-muted-foreground mb-8">Join thousands of aspirants already training smarter.</p>
          <Link to="/dashboard">
            <Button size="lg" className="text-base px-8 py-6 glow-amber">
              Start Free Today
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-syne font-bold text-foreground">CrackIt</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 CrackIt. Built for JEE warriors, by JEE warriors.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
