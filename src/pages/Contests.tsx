import { Clock, Trophy, Users, ChevronRight, Lock } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import DifficultyBadge from "@/components/DifficultyBadge";

const upcomingContests = [
  { id: 1, name: "Weekly Contest #48", date: "Sun, Mar 15", time: "10:00 AM IST", duration: "2h", problems: 4, registered: 2341 },
  { id: 2, name: "Advanced Special #12", date: "Sat, Mar 21", time: "3:00 PM IST", duration: "3h", problems: 6, registered: 1876 },
  { id: 3, name: "Speed Round #23", date: "Wed, Mar 18", time: "8:00 PM IST", duration: "1h", problems: 10, registered: 3012 },
];

const pastContests = [
  { id: 101, name: "Weekly Contest #47", date: "Mar 9, 2026", rank: 156, total: 1892, score: "280/400" },
  { id: 102, name: "Weekly Contest #46", date: "Mar 2, 2026", rank: 203, total: 2134, score: "240/400" },
  { id: 103, name: "Advanced Special #11", date: "Feb 22, 2026", rank: 89, total: 1567, score: "350/600" },
];

const Contests = () => {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="font-syne text-2xl font-bold text-foreground mb-6">Contests</h1>

        {/* Live Contest */}
        <div className="p-6 rounded-xl border border-cyan/30 bg-cyan/5 mb-6 glow-cyan">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Live Now</span>
          </div>
          <h2 className="font-syne text-xl font-bold text-foreground mb-1">Weekly Contest #47</h2>
          <p className="text-sm text-muted-foreground mb-4">4 problems • 1h 32m remaining • 1,234 participants</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {["Problem 1 (Easy)", "Problem 2 (Medium)", "Problem 3 (Hard)", "Problem 4 (IIT-Level)"].map((p, i) => (
              <div key={i} className="p-3 rounded-lg border border-border bg-card text-center">
                <p className="text-xs text-muted-foreground mb-1">{p.split(" (")[0]}</p>
                <DifficultyBadge difficulty={p.match(/\((.+)\)/)?.[1] as any} />
                <p className="text-xs text-muted-foreground mt-1">{[50, 100, 150, 200][i]} pts</p>
              </div>
            ))}
          </div>
          <Button className="gap-2">
            Enter Contest <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Upcoming */}
        <h2 className="font-syne text-lg font-semibold text-foreground mb-4">Upcoming Contests</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {upcomingContests.map((c) => (
            <div key={c.id} className="p-5 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground text-sm mb-2">{c.name}</h3>
              <div className="space-y-1.5 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-2"><Clock className="w-3 h-3" />{c.date} • {c.time}</div>
                <div className="flex items-center gap-2"><Trophy className="w-3 h-3" />{c.problems} problems • {c.duration}</div>
                <div className="flex items-center gap-2"><Users className="w-3 h-3" />{c.registered.toLocaleString()} registered</div>
              </div>
              <Button variant="outline" size="sm" className="w-full">Register</Button>
            </div>
          ))}
        </div>

        {/* Past */}
        <h2 className="font-syne text-lg font-semibold text-foreground mb-4">Past Contests</h2>
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          {pastContests.map((c) => (
            <div key={c.id} className="flex items-center gap-4 px-5 py-4 border-b border-border hover:bg-secondary/30 transition-colors">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.date}</p>
              </div>
              <span className="text-sm font-mono text-foreground">Rank #{c.rank}</span>
              <span className="text-xs text-muted-foreground">/ {c.total}</span>
              <span className="text-sm font-mono text-primary">{c.score}</span>
              <Button variant="ghost" size="sm" className="text-xs">Solutions</Button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Contests;
