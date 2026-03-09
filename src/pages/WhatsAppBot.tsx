import { MessageCircle, Send, Clock, BookOpen, Flame, Brain } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Flame, title: "Daily Question", desc: "Get your Question of the Day at 8 AM every morning" },
  { icon: BookOpen, title: "On-demand Practice", desc: "Send 'Physics Hard' to get a random hard physics problem" },
  { icon: Clock, title: "Streak Tracking", desc: "The bot reminds you to maintain your streak" },
  { icon: Brain, title: "Quick Explanations", desc: "Get AI-powered hints and solutions right on WhatsApp" },
];

const WhatsAppBot = () => {
  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="font-syne text-2xl font-bold text-foreground mb-2">WhatsApp Bot</h1>
          <p className="text-muted-foreground">Practice JEE problems directly on WhatsApp. No app switching needed.</p>
        </div>

        {/* QR Placeholder */}
        <div className="p-8 rounded-xl border border-border bg-card text-center mb-8">
          <div className="w-48 h-48 mx-auto rounded-xl bg-secondary/50 border border-border flex items-center justify-center mb-4">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
              <p className="text-xs text-muted-foreground">QR Code</p>
            </div>
          </div>
          <p className="text-sm text-foreground mb-2">Scan to start the CrackIt WhatsApp Bot</p>
          <p className="text-xs text-muted-foreground mb-4">or</p>
          <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
            <Send className="w-4 h-4" /> Open on WhatsApp
          </Button>
        </div>

        {/* Features */}
        <h2 className="font-syne text-lg font-semibold text-foreground mb-4">What the bot can do</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {features.map((f) => (
            <div key={f.title} className="p-5 rounded-xl border border-border bg-card">
              <f.icon className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Sample conversation */}
        <div className="p-5 rounded-xl border border-border bg-card">
          <h3 className="font-semibold text-foreground text-sm mb-4">Sample Conversation</h3>
          <div className="space-y-3">
            <div className="flex justify-end"><div className="max-w-[70%] bg-emerald-600/20 border border-emerald-600/30 rounded-xl rounded-tr-sm px-4 py-2 text-sm text-foreground">Physics Hard</div></div>
            <div className="flex"><div className="max-w-[80%] bg-secondary rounded-xl rounded-tl-sm px-4 py-2 text-sm text-foreground">🔥 Here's your problem:<br /><br />A uniform disc of mass M and radius R is rotating about its axis with angular velocity ω₀. A small insect of mass m starts walking from the center...<br /><br />Reply with A, B, C, or D</div></div>
            <div className="flex justify-end"><div className="max-w-[70%] bg-emerald-600/20 border border-emerald-600/30 rounded-xl rounded-tr-sm px-4 py-2 text-sm text-foreground">A</div></div>
            <div className="flex"><div className="max-w-[80%] bg-secondary rounded-xl rounded-tl-sm px-4 py-2 text-sm text-foreground">✅ Correct! Your streak is now 24 days 🔥<br /><br />Type 'explain' for the full solution.</div></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WhatsAppBot;
