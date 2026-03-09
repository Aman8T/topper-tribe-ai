import { motion } from "framer-motion";
import { Brain, TrendingUp, Clock, AlertTriangle, Target, Zap } from "lucide-react";
import { analysisData, weakTopics } from "@/data/problems";
import DashboardLayout from "@/components/DashboardLayout";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from "recharts";

const Analysis = () => {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="font-syne text-2xl font-bold text-foreground mb-6">My Analysis</h1>

        {/* Predicted Score */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 rounded-xl border border-primary/30 bg-primary/5 glow-amber text-center"
          >
            <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Predicted JEE Main Score</p>
            <p className="font-syne text-4xl font-bold text-primary">{analysisData.predicted.main}</p>
            <p className="text-xs text-muted-foreground mt-1">out of 300 • ~98.5 percentile</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl border border-cyan/30 bg-cyan/5 glow-cyan text-center"
          >
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Predicted JEE Advanced Score</p>
            <p className="font-syne text-4xl font-bold text-cyan-400">{analysisData.predicted.advanced}</p>
            <p className="text-xs text-muted-foreground mt-1">out of 360 • ~AIR 2,500</p>
          </motion.div>
        </div>

        {/* Accuracy Trend */}
        <div className="p-6 rounded-xl border border-border bg-card mb-6">
          <h3 className="font-syne font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" /> Accuracy Trend
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analysisData.accuracyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(224 25% 18%)" />
                <XAxis dataKey="week" tick={{ fill: "hsl(220 15% 55%)", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(220 15% 55%)", fontSize: 12 }} domain={[30, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(224 45% 11%)", border: "1px solid hsl(224 25% 18%)", borderRadius: "8px" }}
                  labelStyle={{ color: "hsl(220 20% 90%)" }}
                />
                <Line type="monotone" dataKey="accuracy" stroke="hsl(37 100% 50%)" strokeWidth={2} dot={{ fill: "hsl(37 100% 50%)", r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Time Analysis */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-syne font-semibold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" /> Time per Question (min)
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analysisData.timeAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(224 25% 18%)" />
                  <XAxis dataKey="chapter" tick={{ fill: "hsl(220 15% 55%)", fontSize: 11 }} />
                  <YAxis tick={{ fill: "hsl(220 15% 55%)", fontSize: 12 }} />
                  <Tooltip contentStyle={{ backgroundColor: "hsl(224 45% 11%)", border: "1px solid hsl(224 25% 18%)", borderRadius: "8px" }} />
                  <Legend />
                  <Bar dataKey="you" fill="hsl(37 100% 50%)" name="You" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="topper" fill="hsl(191 100% 50%)" name="Topper Avg" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Error Patterns */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <h3 className="font-syne font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" /> Error Patterns
            </h3>
            <div className="space-y-4">
              {analysisData.errorPatterns.map((e) => (
                <div key={e.pattern}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{e.pattern}</span>
                    <span className="font-mono text-muted-foreground">{e.percentage}%</span>
                  </div>
                  <Progress value={e.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chapter Performance */}
        <div className="p-6 rounded-xl border border-border bg-card mb-6">
          <h3 className="font-syne font-semibold text-foreground mb-4">Chapter-wise Performance</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {weakTopics.map((t) => (
              <div key={t.chapter} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                  t.subject === "Physics" ? "bg-blue-500/20 text-blue-400" :
                  t.subject === "Chemistry" ? "bg-green-500/20 text-green-400" :
                  "bg-orange-500/20 text-orange-400"
                }`}>{t.subject.slice(0, 3)}</span>
                <span className="text-sm text-foreground flex-1">{t.chapter}</span>
                <Progress value={t.score} className="w-24 h-2" />
                <span className={`text-sm font-mono font-bold w-10 text-right ${t.score < 50 ? "text-red-400" : t.score < 70 ? "text-amber-400" : "text-emerald-400"}`}>
                  {t.score}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Drill Recommendations */}
        <div className="p-6 rounded-xl border border-cyan/30 bg-cyan/5 glow-cyan">
          <h3 className="font-syne font-semibold text-foreground mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-cyan-400" /> AI Drill Recommendations
          </h3>
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">Practice these 5 chapters this week for maximum improvement</p>
          <div className="space-y-2">
            {analysisData.drillRecommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-border">
                <span className="font-mono text-xs text-cyan-400 font-bold mt-0.5">{i + 1}.</span>
                <p className="text-sm text-foreground">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analysis;
