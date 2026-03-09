import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Lightbulb, Check, X, Clock, ThumbsUp, MessageSquare, Award } from "lucide-react";
import { problems, communityPosts } from "@/data/problems";
import LaTeX from "@/components/LaTeX";
import DifficultyBadge from "@/components/DifficultyBadge";
import SubjectBadge from "@/components/SubjectBadge";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProblemSolving = () => {
  const { id } = useParams();
  const problem = problems.find((p) => p.id === id);
  const [selected, setSelected] = useState<string>("");
  const [integerAnswer, setIntegerAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  if (!problem) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Problem not found.</p>
            <Link to="/problems"><Button variant="outline">Back to Problems</Button></Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const posts = communityPosts.filter((p) => p.problemId === problem.id);
  const isCorrect = problem.answerType === "Integer"
    ? integerAnswer.trim() === problem.correctAnswer
    : selected === problem.correctAnswer;

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeElapsed(Math.floor(Math.random() * 300) + 60);
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Back */}
        <Link to="/problems" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Problems
        </Link>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Problem Statement */}
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="font-mono text-xs text-muted-foreground">{problem.id}</span>
                <SubjectBadge subject={problem.subject} />
                <DifficultyBadge difficulty={problem.difficulty} />
                {problem.year && (
                  <span className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded">{problem.source} {problem.year}</span>
                )}
              </div>
              <h1 className="font-syne text-xl font-bold text-foreground mb-4">{problem.title}</h1>
              <div className="text-sm leading-relaxed text-foreground/90">
                <LaTeX text={problem.statement} />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {problem.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-xs bg-secondary text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Answer Area */}
          <div className="space-y-4">
            {!submitted ? (
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-syne font-semibold text-foreground mb-4">Your Answer</h3>

                {problem.options ? (
                  <div className="space-y-2">
                    {problem.options.map((opt, i) => {
                      const letter = String.fromCharCode(65 + i);
                      return (
                        <button
                          key={i}
                          onClick={() => setSelected(letter)}
                          className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                            selected === letter
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border bg-secondary/30 text-foreground hover:border-muted-foreground"
                          }`}
                        >
                          <span className="font-mono font-bold mr-3 text-muted-foreground">{letter}.</span>
                          <LaTeX text={opt} className="inline" />
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <Input
                    type="text"
                    placeholder="Enter your integer answer"
                    value={integerAnswer}
                    onChange={(e) => setIntegerAnswer(e.target.value)}
                    className="bg-secondary/30 border-border font-mono text-lg"
                  />
                )}

                <div className="flex gap-3 mt-6">
                  <Button
                    onClick={handleSubmit}
                    disabled={!selected && !integerAnswer}
                    className="flex-1"
                  >
                    Submit Answer
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowHint(true)}
                    className="gap-2"
                  >
                    <Lightbulb className="w-4 h-4" />
                    Hint
                  </Button>
                </div>

                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 rounded-lg border border-cyan/30 bg-cyan/5"
                    >
                      <p className="text-xs text-cyan-400 font-semibold mb-1 uppercase tracking-wider">AI Hint</p>
                      <p className="text-sm text-foreground/80">Think about conservation laws. What quantity remains constant when there's no external torque?</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Post-submission tabs */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Result banner */}
                <div className={`p-4 rounded-xl border mb-4 flex items-center gap-3 ${
                  isCorrect
                    ? "border-emerald-500/30 bg-emerald-500/10"
                    : "border-red-500/30 bg-red-500/10"
                }`}>
                  {isCorrect ? (
                    <>
                      <Check className="w-6 h-6 text-emerald-400" />
                      <div>
                        <p className="font-semibold text-emerald-400">Correct!</p>
                        <p className="text-xs text-muted-foreground">Solved in {Math.floor(timeElapsed / 60)}m {timeElapsed % 60}s</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <X className="w-6 h-6 text-red-400" />
                      <div>
                        <p className="font-semibold text-red-400">Incorrect</p>
                        <p className="text-xs text-muted-foreground">Correct answer: {problem.correctAnswer}</p>
                      </div>
                    </>
                  )}
                </div>

                <Tabs defaultValue={isCorrect ? "solution" : "diagnosis"} className="w-full">
                  <TabsList className="w-full bg-secondary/50">
                    {!isCorrect && <TabsTrigger value="diagnosis" className="flex-1 text-xs">AI Diagnosis</TabsTrigger>}
                    <TabsTrigger value="solution" className="flex-1 text-xs">Official Solution</TabsTrigger>
                    <TabsTrigger value="community" className="flex-1 text-xs">Community ({posts.length || "3"})</TabsTrigger>
                  </TabsList>

                  {!isCorrect && (
                    <TabsContent value="diagnosis" className="mt-4">
                      <div className="p-5 rounded-xl border border-cyan/30 bg-cyan/5">
                        <div className="flex items-center gap-2 mb-3">
                          <Lightbulb className="w-5 h-5 text-cyan-400" />
                          <span className="text-sm font-semibold text-cyan-400">AI Error Diagnosis</span>
                        </div>
                        <div className="text-sm text-foreground/90 leading-relaxed">
                          <LaTeX text={problem.aiExplanation} />
                        </div>
                        <div className="mt-4 p-3 rounded-lg bg-secondary/50 border border-border">
                          <p className="text-xs font-semibold text-primary mb-1">Weak Concept Tagged:</p>
                          <div className="flex flex-wrap gap-1">
                            {problem.tags.map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded text-xs bg-primary/10 text-primary border border-primary/20">{t}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  )}

                  <TabsContent value="solution" className="mt-4">
                    <div className="p-5 rounded-xl border border-border bg-card">
                      <h4 className="font-syne font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" /> Official Solution
                      </h4>
                      <div className="text-sm text-foreground/90 leading-relaxed">
                        <LaTeX text={problem.officialSolution} />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="community" className="mt-4 space-y-3">
                    {(posts.length > 0 ? posts : communityPosts.slice(0, 3)).map((post) => (
                      <div key={post.id} className="p-4 rounded-xl border border-border bg-card">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">{post.avatar}</div>
                          <span className="text-sm font-medium text-foreground">{post.author}</span>
                          {post.isTopper && <span className="text-[10px] px-1.5 py-0.5 rounded bg-primary/20 text-primary font-bold">TOPPER</span>}
                          <span className="text-xs text-muted-foreground ml-auto">{post.timestamp}</span>
                        </div>
                        <div className="text-sm text-foreground/80 leading-relaxed">
                          <LaTeX text={post.content} />
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <ThumbsUp className="w-3 h-3" /> {post.upvotes}
                          </button>
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                            <MessageSquare className="w-3 h-3" /> Reply
                          </button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProblemSolving;
