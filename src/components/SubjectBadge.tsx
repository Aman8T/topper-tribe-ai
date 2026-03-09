import { type Subject } from "@/data/problems";

const colors: Record<Subject, string> = {
  Physics: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Chemistry: "bg-green-500/20 text-green-400 border-green-500/30",
  Maths: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

const SubjectBadge = ({ subject }: { subject: Subject }) => (
  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${colors[subject]}`}>
    {subject}
  </span>
);

export default SubjectBadge;
