import { type Difficulty } from "@/data/problems";

const colors: Record<Difficulty, string> = {
  Easy: "bg-emerald-700/15 text-emerald-800 border-emerald-700/25",
  Medium: "bg-amber-700/15 text-amber-800 border-amber-700/25",
  Hard: "bg-red-700/15 text-red-800 border-red-700/25",
  "IIT-Level": "bg-purple-700/15 text-purple-800 border-purple-700/25",
};

const DifficultyBadge = ({ difficulty }: { difficulty: Difficulty }) => (
  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${colors[difficulty]}`}>
    {difficulty}
  </span>
);

export default DifficultyBadge;
