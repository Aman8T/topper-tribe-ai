import { type Subject } from "@/data/problems";

const colors: Record<Subject, string> = {
  Physics: "bg-blue-800/15 text-blue-800 border-blue-800/25",
  Chemistry: "bg-emerald-800/15 text-emerald-800 border-emerald-800/25",
  Maths: "bg-amber-700/15 text-amber-800 border-amber-700/25",
};

const SubjectBadge = ({ subject }: { subject: Subject }) => (
  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${colors[subject]}`}>
    {subject}
  </span>
);

export default SubjectBadge;
