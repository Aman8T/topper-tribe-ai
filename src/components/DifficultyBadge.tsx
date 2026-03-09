import { type Difficulty } from "@/data/problems";

const colors: Record<Difficulty, string> = {
  Easy: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Hard: "bg-red-500/20 text-red-400 border-red-500/30",
  "IIT-Level": "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

const DifficultyBadge = ({ difficulty }: { difficulty: Difficulty }) => (
  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${colors[difficulty]}`}>
    {difficulty}
  </span>
);

export default DifficultyBadge;
