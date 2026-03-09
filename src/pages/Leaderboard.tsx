import { useState } from "react";
import { ArrowUp, ArrowDown, Minus, Flame, Search } from "lucide-react";
import { leaderboardUsers } from "@/data/problems";
import DashboardLayout from "@/components/DashboardLayout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Leaderboard = () => {
  const [period, setPeriod] = useState("all");

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-syne text-2xl font-bold text-foreground mb-6">Leaderboard</h1>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Tabs value={period} onValueChange={setPeriod}>
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="all" className="text-xs">All Time</TabsTrigger>
              <TabsTrigger value="week" className="text-xs">This Week</TabsTrigger>
              <TabsTrigger value="month" className="text-xs">This Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="hidden sm:grid grid-cols-[60px_1fr_100px_100px_80px_60px] gap-4 px-5 py-3 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <span>Rank</span>
            <span>User</span>
            <span>Rating</span>
            <span>Solved</span>
            <span>Streak</span>
            <span>Δ</span>
          </div>
          {leaderboardUsers.map((user, i) => (
            <div
              key={user.rank}
              className={`grid grid-cols-[40px_1fr_auto] sm:grid-cols-[60px_1fr_100px_100px_80px_60px] gap-2 sm:gap-4 px-5 py-3 border-b border-border items-center ${
                i < 3 ? "bg-primary/5" : "hover:bg-secondary/30"
              } transition-colors`}
            >
              <span className={`font-mono text-sm font-bold ${i < 3 ? "text-primary" : "text-muted-foreground"}`}>
                #{user.rank}
              </span>
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  i === 0 ? "bg-primary/20 text-primary" : "bg-secondary text-foreground"
                }`}>
                  {user.avatar}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{user.username}</p>
                  <p className="text-xs text-muted-foreground sm:hidden">{user.rating} • {user.problemsSolved} solved</p>
                </div>
              </div>
              <span className="hidden sm:block font-mono text-sm text-foreground">{user.rating}</span>
              <span className="hidden sm:block font-mono text-sm text-muted-foreground">{user.problemsSolved}</span>
              <span className="hidden sm:flex items-center gap-1 text-sm">
                <Flame className="w-3 h-3 text-primary" />
                <span className="font-mono text-muted-foreground">{user.streak}</span>
              </span>
              <span className="hidden sm:flex items-center justify-end">
                {user.change > 0 ? <ArrowUp className="w-4 h-4 text-emerald-400" /> :
                 user.change < 0 ? <ArrowDown className="w-4 h-4 text-red-400" /> :
                 <Minus className="w-4 h-4 text-muted-foreground" />}
              </span>
            </div>
          ))}
        </div>

        {/* Your rank */}
        <div className="mt-4 p-4 rounded-xl border border-primary/30 bg-primary/5 flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-primary">#1,234</span>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">AK</div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Arjun K. (You)</p>
          </div>
          <span className="font-mono text-sm text-foreground">1,847</span>
          <span className="font-mono text-sm text-muted-foreground">342</span>
          <div className="flex items-center gap-1">
            <Flame className="w-3 h-3 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">23</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leaderboard;
