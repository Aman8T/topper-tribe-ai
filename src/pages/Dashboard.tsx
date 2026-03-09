import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Flame, Clock, ArrowUp, ArrowDown, Minus, ChevronRight, BookOpen, Zap } from "lucide-react";
import { problems, weakTopics, leaderboardUsers } from "@/data/problems";
import DifficultyBadge from "@/components/DifficultyBadge";
import SubjectBadge from "@/components/SubjectBadge";
import DashboardLayout from "@/components/DashboardLayout";
import { Progress } from "@/components/ui/progress";

const qotd = problems[0];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main area */}
          <div className="lg:col-span-2 space-y-6">
            {/* QOTD */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-xl border border-primary/30 bg-primary/5 glow-amber"
            >
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-primary animate-flame" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Question of the Day</span>
                <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  Resets in 14h 32m
                </div>
              </div>
              <h3 className="font-syne text-lg font-bold text-foreground mb-2">{qotd.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <SubjectBadge subject={qotd.subject} />
                <DifficultyBadge difficulty={qotd.difficulty} />
                <span className="text-xs text-muted-foreground">{qotd.chapter}</span>
              </div>
              <Link to={`/problem/${qotd.id}`}>
                <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                  Solve Now <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            {/* Active Contest Banner */}
            <div className="p-4 rounded-xl border border-cyan/30 bg-cyan/5 flex items-center gap-4">
              <Zap className="w-8 h-8 text-cyan-400" />
              <div className="flex-1">
                <p className="font-semibold text-foreground text-sm">Weekly Contest #47 is LIVE</p>
                <p className="text-xs text-muted-foreground">4 problems • 2h remaining • 1,234 participants</p>
              </div>
              <Link to="/contests">
                <button className="px-4 py-2 rounded-lg bg-cyan-400/10 text-cyan-400 text-sm font-medium border border-cyan-400/30 hover:bg-cyan-400/20 transition-colors">
                  Join
                </button>
              </Link>
            </div>

            {/* Weak Topics */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-syne text-lg font-semibold text-foreground mb-4">Your Weak Topics</h3>
              <div className="space-y-3">
                {weakTopics.slice(0, 5).map((topic) => (
                  <div key={topic.chapter} className="flex items-center gap-3">
                    <span className="text-sm text-foreground w-40 truncate">{topic.chapter}</span>
                    <Progress value={topic.score} className="flex-1 h-2" />
                    <span className={`text-sm font-mono font-bold w-10 text-right ${topic.score < 50 ? "text-red-400" : topic.score < 70 ? "text-amber-400" : "text-emerald-400"}`}>
                      {topic.score}%
                    </span>
                  </div>
                ))}
              </div>
              <Link to="/analysis" className="inline-flex items-center gap-1 text-sm text-primary mt-4 hover:underline">
                View Full Analysis <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Recent Activity */}
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-syne text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { action: "Solved", problem: "Electric Field Due to Charged Ring", time: "2h ago", correct: true },
                  { action: "Attempted", problem: "Rotating Disc Angular Momentum", time: "5h ago", correct: false },
                  { action: "Solved", problem: "Grignard Reagent Product", time: "1d ago", correct: true },
                  { action: "Solved", problem: "Matrix Determinant", time: "1d ago", correct: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className={`w-2 h-2 rounded-full ${item.correct ? "bg-emerald-400" : "bg-red-400"}`} />
                    <span className="text-muted-foreground">{item.action}</span>
                    <span className="text-foreground font-medium truncate">{item.problem}</span>
                    <span className="ml-auto text-xs text-muted-foreground shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl border border-border bg-card text-center">
                <p className="font-mono text-2xl font-bold text-foreground">342</p>
                <p className="text-xs text-muted-foreground">Problems Solved</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card text-center">
                <p className="font-mono text-2xl font-bold text-primary">23</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
            </div>

            {/* Leaderboard Top 5 */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-syne font-semibold text-foreground">Top Rankers</h3>
                <Link to="/leaderboard" className="text-xs text-primary hover:underline">View All</Link>
              </div>
              <div className="space-y-3">
                {leaderboardUsers.slice(0, 5).map((user) => (
                  <div key={user.rank} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground w-5">#{user.rank}</span>
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                      {user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{user.username}</p>
                      <p className="text-xs text-muted-foreground font-mono">{user.rating}</p>
                    </div>
                    <div className="flex items-center">
                      {user.change > 0 ? <ArrowUp className="w-3 h-3 text-emerald-400" /> :
                       user.change < 0 ? <ArrowDown className="w-3 h-3 text-red-400" /> :
                       <Minus className="w-3 h-3 text-muted-foreground" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Practice */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <h3 className="font-syne font-semibold text-foreground mb-3">Quick Practice</h3>
              <div className="space-y-2">
                <Link to="/problems" className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm text-foreground">
                  <BookOpen className="w-4 h-4 text-primary" />
                  JEE Main PYQs
                </Link>
                <Link to="/problems" className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm text-foreground">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  JEE Advanced PYQs
                </Link>
                <Link to="/problems" className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm text-foreground">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  Top 1% Problems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
