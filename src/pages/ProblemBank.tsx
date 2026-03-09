import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Check, Filter } from "lucide-react";
import { problems, chapters, type Subject, type Difficulty, type Source } from "@/data/problems";
import DifficultyBadge from "@/components/DifficultyBadge";
import SubjectBadge from "@/components/SubjectBadge";
import DashboardLayout from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProblemBank = () => {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState<Subject | "All">("All");
  const [difficulty, setDifficulty] = useState<Difficulty | "All">("All");
  const [source, setSource] = useState<Source | "All">("All");

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.chapter.toLowerCase().includes(search.toLowerCase())) return false;
      if (subject !== "All" && p.subject !== subject) return false;
      if (difficulty !== "All" && p.difficulty !== difficulty) return false;
      if (source !== "All" && p.source !== source) return false;
      return true;
    });
  }, [search, subject, difficulty, source]);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="font-syne text-2xl font-bold text-foreground mb-6">Problem Bank</h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-card border-border"
            />
          </div>
          <Select value={subject} onValueChange={(v) => setSubject(v as Subject | "All")}>
            <SelectTrigger className="w-[140px] bg-card border-border">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Subjects</SelectItem>
              <SelectItem value="Physics">Physics</SelectItem>
              <SelectItem value="Chemistry">Chemistry</SelectItem>
              <SelectItem value="Maths">Maths</SelectItem>
            </SelectContent>
          </Select>
          <Select value={difficulty} onValueChange={(v) => setDifficulty(v as Difficulty | "All")}>
            <SelectTrigger className="w-[140px] bg-card border-border">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Levels</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
              <SelectItem value="IIT-Level">IIT-Level</SelectItem>
            </SelectContent>
          </Select>
          <Select value={source} onValueChange={(v) => setSource(v as Source | "All")}>
            <SelectTrigger className="w-[160px] bg-card border-border">
              <SelectValue placeholder="Source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Sources</SelectItem>
              <SelectItem value="JEE Main PYQ">JEE Main PYQ</SelectItem>
              <SelectItem value="JEE Advanced PYQ">JEE Advanced PYQ</SelectItem>
              <SelectItem value="Community">Community</SelectItem>
              <SelectItem value="Olympiad">Olympiad</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Problem List */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="hidden md:grid grid-cols-[1fr_120px_100px_80px_80px_60px] gap-4 px-5 py-3 border-b border-border text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <span>Problem</span>
            <span>Chapter</span>
            <span>Difficulty</span>
            <span>Source</span>
            <span>Accept %</span>
            <span>Status</span>
          </div>
          {filtered.map((p) => (
            <Link
              key={p.id}
              to={`/problem/${p.id}`}
              className="grid grid-cols-1 md:grid-cols-[1fr_120px_100px_80px_80px_60px] gap-2 md:gap-4 px-5 py-4 border-b border-border hover:bg-secondary/30 transition-colors items-center"
            >
              <div>
                <span className="font-mono text-xs text-muted-foreground mr-2">{p.id}</span>
                <span className="text-sm font-medium text-foreground">{p.title}</span>
                <div className="flex items-center gap-2 mt-1 md:hidden">
                  <SubjectBadge subject={p.subject} />
                  <DifficultyBadge difficulty={p.difficulty} />
                </div>
              </div>
              <span className="hidden md:block text-xs text-muted-foreground">{p.chapter}</span>
              <span className="hidden md:block"><DifficultyBadge difficulty={p.difficulty} /></span>
              <span className="hidden md:block text-xs text-muted-foreground">{p.year ? `${p.source.split(" ")[0]} '${String(p.year).slice(2)}` : p.source.split(" ")[0]}</span>
              <span className="hidden md:block text-xs font-mono text-muted-foreground">{p.acceptanceRate}%</span>
              <span className="hidden md:flex justify-center">
                {p.solved && <Check className="w-4 h-4 text-emerald-400" />}
              </span>
            </Link>
          ))}
          {filtered.length === 0 && (
            <div className="p-12 text-center text-muted-foreground">No problems match your filters.</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProblemBank;
