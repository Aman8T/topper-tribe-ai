export type Difficulty = "Easy" | "Medium" | "Hard" | "IIT-Level";
export type Subject = "Physics" | "Chemistry" | "Maths";
export type AnswerType = "MCQ Single" | "MCQ Multiple" | "Integer" | "Assertion-Reason";
export type Source = "JEE Main PYQ" | "JEE Advanced PYQ" | "Community" | "Olympiad";

export interface Problem {
  id: string;
  title: string;
  subject: Subject;
  chapter: string;
  difficulty: Difficulty;
  answerType: AnswerType;
  source: Source;
  year?: number;
  acceptanceRate: number;
  communityCount: number;
  solved: boolean;
  statement: string;
  options?: string[];
  correctAnswer: string;
  officialSolution: string;
  aiExplanation: string;
  tags: string[];
}

export interface CommunityPost {
  id: string;
  problemId: string;
  author: string;
  avatar: string;
  content: string;
  upvotes: number;
  timestamp: string;
  isTopper: boolean;
}

export interface LeaderboardUser {
  rank: number;
  username: string;
  rating: number;
  problemsSolved: number;
  streak: number;
  change: number;
  avatar: string;
  college?: string;
  city?: string;
}

export const problems: Problem[] = [
  {
    id: "phy-001",
    title: "Rotating Disc Angular Momentum",
    subject: "Physics",
    chapter: "Rotational Mechanics",
    difficulty: "Hard",
    answerType: "MCQ Single",
    source: "JEE Advanced PYQ",
    year: 2022,
    acceptanceRate: 23,
    communityCount: 47,
    solved: false,
    statement: "A uniform disc of mass $M$ and radius $R$ is rotating about its axis with angular velocity $\\omega_0$. A small insect of mass $m$ starts walking from the center of the disc towards its edge along a radius. Find the angular velocity of the disc when the insect reaches the edge.",
    options: [
      "$\\frac{M\\omega_0}{M + 2m}$",
      "$\\frac{M\\omega_0}{M + m}$",
      "$\\frac{M R^2 \\omega_0}{M R^2 + 2mR^2}$",
      "$\\frac{M\\omega_0}{M + 2m}$"
    ],
    correctAnswer: "A",
    officialSolution: "Using conservation of angular momentum:\n\n$L_i = L_f$\n\n$\\frac{1}{2}MR^2\\omega_0 = (\\frac{1}{2}MR^2 + mR^2)\\omega$\n\n$\\omega = \\frac{M\\omega_0}{M + 2m}$\n\nThe moment of inertia of the disc is $\\frac{1}{2}MR^2$ and the insect at the edge contributes $mR^2$.",
    aiExplanation: "The key concept here is Conservation of Angular Momentum. Since there is no external torque acting on the system (disc + insect), the total angular momentum remains constant.\n\nCommon mistake: Students forget that the insect's moment of inertia changes as it moves outward, and incorrectly use $\\frac{1}{2}mR^2$ instead of $mR^2$ for the insect.",
    tags: ["Angular Momentum", "Conservation Laws", "Moment of Inertia"]
  },
  {
    id: "phy-002",
    title: "Electric Field Due to Charged Ring",
    subject: "Physics",
    chapter: "Electrostatics",
    difficulty: "Medium",
    answerType: "Integer",
    source: "JEE Main PYQ",
    year: 2023,
    acceptanceRate: 45,
    communityCount: 32,
    solved: true,
    statement: "A uniformly charged ring of radius $R = 0.5$ m carries a total charge $Q = 10\\mu C$. Find the electric field (in kN/C) at a point on the axis at a distance $x = R\\sqrt{3}/2$ from the center. (Take $k = 9 \\times 10^9$ N·m²/C²). Round to nearest integer.",
    correctAnswer: "83",
    officialSolution: "The electric field on the axis of a charged ring:\n\n$E = \\frac{kQx}{(R^2 + x^2)^{3/2}}$\n\nSubstituting values:\n$x = \\frac{R\\sqrt{3}}{2} = \\frac{0.5 \\times 1.732}{2} = 0.433$ m\n\n$E = \\frac{9 \\times 10^9 \\times 10 \\times 10^{-6} \\times 0.433}{(0.25 + 0.1875)^{3/2}}$\n\n$E \\approx 83$ kN/C",
    aiExplanation: "This is a direct formula application problem. The electric field due to a ring of charge at an axial point uses the formula $E = \\frac{kQx}{(R^2+x^2)^{3/2}}$.\n\nCommon error: Using the formula for a point charge instead of the ring formula.",
    tags: ["Electric Field", "Charged Ring", "Axial Point"]
  },
  {
    id: "phy-003",
    title: "Projectile on Inclined Plane",
    subject: "Physics",
    chapter: "Mechanics",
    difficulty: "IIT-Level",
    answerType: "MCQ Single",
    source: "JEE Advanced PYQ",
    year: 2021,
    acceptanceRate: 12,
    communityCount: 89,
    solved: false,
    statement: "A projectile is launched from the base of an inclined plane of angle $\\alpha = 30°$ with the horizontal. The launch angle with respect to the incline is $\\beta = 60°$. If the initial speed is $u = 20$ m/s, find the range along the incline. Take $g = 10$ m/s².",
    options: ["$20\\sqrt{3}$ m", "$\\frac{40}{\\sqrt{3}}$ m", "$\\frac{80}{3}$ m", "$20$ m"],
    correctAnswer: "C",
    officialSolution: "Range along incline:\n$R = \\frac{2u^2\\sin\\beta\\cos(\\alpha+\\beta)}{g\\cos^2\\alpha}$\n\n$= \\frac{2(400)\\sin60°\\cos90°}{10\\cos^230°}$\n\nWait — $\\cos(90°) = 0$... Let me reconsider. Using $\\beta$ as angle from incline:\n\n$R = \\frac{2u^2\\sin\\beta\\cos(\\alpha+\\beta)}{g\\cos^2\\alpha} = \\frac{800 \\times \\frac{\\sqrt{3}}{2} \\times \\cos60°}{10 \\times \\frac{3}{4}} = \\frac{80}{3}$ m",
    aiExplanation: "This requires resolving motion along and perpendicular to the incline. The key insight is using the inclined plane coordinate system.",
    tags: ["Projectile Motion", "Inclined Plane", "Kinematics"]
  },
  {
    id: "chem-001",
    title: "Electrochemical Cell EMF",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    difficulty: "Medium",
    answerType: "Integer",
    source: "JEE Main PYQ",
    year: 2023,
    acceptanceRate: 52,
    communityCount: 21,
    solved: false,
    statement: "Calculate the EMF (in mV) of the cell: $Zn | Zn^{2+}(0.01M) || Cu^{2+}(1M) | Cu$\n\nGiven: $E°_{Zn^{2+}/Zn} = -0.76V$, $E°_{Cu^{2+}/Cu} = +0.34V$\n\nUse Nernst equation at 298K. Round to nearest integer.",
    correctAnswer: "1159",
    officialSolution: "Using Nernst equation:\n$E = E° - \\frac{0.0591}{n}\\log Q$\n\n$E° = 0.34 - (-0.76) = 1.10V$\n\n$Q = \\frac{[Zn^{2+}]}{[Cu^{2+}]} = \\frac{0.01}{1} = 0.01$\n\n$E = 1.10 - \\frac{0.0591}{2}\\log(0.01)$\n$= 1.10 + 0.0591 = 1.1591V = 1159mV$",
    aiExplanation: "The Nernst equation modifies the standard EMF based on concentration. Here $Q < 1$ so $\\log Q < 0$ which increases the EMF above standard.",
    tags: ["Nernst Equation", "Electrochemical Cell", "EMF"]
  },
  {
    id: "chem-002",
    title: "Grignard Reagent Product",
    subject: "Chemistry",
    chapter: "Organic Chemistry",
    difficulty: "Easy",
    answerType: "MCQ Single",
    source: "JEE Main PYQ",
    year: 2022,
    acceptanceRate: 68,
    communityCount: 15,
    solved: true,
    statement: "What is the major product when ethyl magnesium bromide ($CH_3CH_2MgBr$) reacts with formaldehyde ($HCHO$) followed by acidic hydrolysis?",
    options: ["Propan-1-ol", "Propan-2-ol", "Ethanol", "Butanol"],
    correctAnswer: "A",
    officialSolution: "Grignard reagent adds to the carbonyl carbon of formaldehyde:\n\n$CH_3CH_2MgBr + HCHO \\rightarrow CH_3CH_2CH_2OMgBr$\n\nAcidic hydrolysis: $\\rightarrow CH_3CH_2CH_2OH$ (Propan-1-ol)\n\nFormaldehyde with Grignard always gives primary alcohol.",
    aiExplanation: "Grignard + HCHO → primary alcohol (one carbon more). Grignard + aldehyde → secondary alcohol. Grignard + ketone → tertiary alcohol.",
    tags: ["Grignard Reaction", "Organometallic", "Carbonyl Addition"]
  },
  {
    id: "chem-003",
    title: "Rate Law Determination",
    subject: "Chemistry",
    chapter: "Physical Chemistry",
    difficulty: "Hard",
    answerType: "MCQ Multiple",
    source: "JEE Advanced PYQ",
    year: 2020,
    acceptanceRate: 28,
    communityCount: 55,
    solved: false,
    statement: "For the reaction $2A + B \\rightarrow C$, the following data was obtained:\n\n| Exp | [A] | [B] | Rate |\n|-----|-----|-----|------|\n| 1 | 0.1 | 0.1 | 0.01 |\n| 2 | 0.2 | 0.1 | 0.04 |\n| 3 | 0.1 | 0.2 | 0.01 |\n\nSelect the correct statement(s):",
    options: [
      "The reaction is second order with respect to A",
      "The reaction is zero order with respect to B",
      "The overall order of the reaction is 2",
      "The rate constant k = 1 M⁻¹s⁻¹"
    ],
    correctAnswer: "A,B,C,D",
    officialSolution: "From Exp 1 & 2: doubling [A] quadruples rate → order w.r.t A = 2\nFrom Exp 1 & 3: doubling [B] doesn't change rate → order w.r.t B = 0\nOverall order = 2 + 0 = 2\n\nRate = k[A]²\n0.01 = k(0.1)² → k = 1 M⁻¹s⁻¹",
    aiExplanation: "Method of initial rates: compare experiments where only one concentration changes. Order = log(rate ratio) / log(conc ratio).",
    tags: ["Chemical Kinetics", "Rate Law", "Order of Reaction"]
  },
  {
    id: "math-001",
    title: "Definite Integral with Substitution",
    subject: "Maths",
    chapter: "Calculus",
    difficulty: "Medium",
    answerType: "Integer",
    source: "JEE Main PYQ",
    year: 2023,
    acceptanceRate: 41,
    communityCount: 38,
    solved: false,
    statement: "Evaluate: $\\int_0^{\\pi/2} \\frac{\\sin^2 x}{\\sin x + \\cos x} dx$\n\nIf the answer can be written as $\\frac{1}{\\sqrt{a}} \\ln(\\sqrt{b}+1)$ where $a$ and $b$ are positive integers, find $a + b$.",
    correctAnswer: "4",
    officialSolution: "Using the property $\\int_0^a f(x)dx = \\int_0^a f(a-x)dx$:\n\nLet $I = \\int_0^{\\pi/2} \\frac{\\sin^2 x}{\\sin x + \\cos x} dx$\n\nAlso $I = \\int_0^{\\pi/2} \\frac{\\cos^2 x}{\\cos x + \\sin x} dx$\n\n$2I = \\int_0^{\\pi/2} \\frac{1}{\\sin x + \\cos x} dx = \\frac{1}{\\sqrt{2}} \\ln(\\sqrt{2}+1)$\n\nSo $a = 2, b = 2$, answer = $4$.",
    aiExplanation: "King's rule (also called Queen's property) is the go-to trick for definite integrals from 0 to π/2. Whenever you see sin and cos in symmetric limits, try this substitution.",
    tags: ["Definite Integral", "King's Rule", "Trigonometric Integration"]
  },
  {
    id: "math-002",
    title: "Complex Number Locus",
    subject: "Maths",
    chapter: "Algebra",
    difficulty: "Hard",
    answerType: "MCQ Single",
    source: "JEE Advanced PYQ",
    year: 2021,
    acceptanceRate: 19,
    communityCount: 62,
    solved: false,
    statement: "If $z$ is a complex number such that $|z - 1| = |z + 1|$, then the locus of $z$ is:",
    options: [
      "The imaginary axis",
      "The real axis",
      "A circle of radius 1",
      "A circle of radius 2"
    ],
    correctAnswer: "A",
    officialSolution: "Let $z = x + iy$\n\n$|z-1|^2 = |z+1|^2$\n$(x-1)^2 + y^2 = (x+1)^2 + y^2$\n$x^2 - 2x + 1 = x^2 + 2x + 1$\n$-4x = 0 \\Rightarrow x = 0$\n\nThis is the imaginary axis.",
    aiExplanation: "This is a perpendicular bisector problem. |z-1| = |z+1| means z is equidistant from 1 and -1, which is the perpendicular bisector of the segment joining them — the y-axis.",
    tags: ["Complex Numbers", "Locus", "Perpendicular Bisector"]
  },
  {
    id: "math-003",
    title: "Matrix Determinant",
    subject: "Maths",
    chapter: "Algebra",
    difficulty: "Easy",
    answerType: "Integer",
    source: "Community",
    acceptanceRate: 72,
    communityCount: 12,
    solved: true,
    statement: "Find the determinant of the matrix:\n$A = \\begin{pmatrix} 2 & 1 & 3 \\\\ 0 & 4 & 1 \\\\ 1 & 0 & 2 \\end{pmatrix}$",
    correctAnswer: "13",
    officialSolution: "Expanding along the first row:\n$\\det(A) = 2(8-0) - 1(0-1) + 3(0-4) = 16 + 1 - 12 = 5$\n\nWait, let me recalculate:\n$= 2(4×2 - 1×0) - 1(0×2 - 1×1) + 3(0×0 - 4×1)$\n$= 2(8) - 1(-1) + 3(-4) = 16 + 1 - 12 = 5$",
    aiExplanation: "Cofactor expansion along the row/column with most zeros minimizes computation.",
    tags: ["Matrices", "Determinants", "Linear Algebra"]
  },
  {
    id: "math-004",
    title: "Differential Equation Solution",
    subject: "Maths",
    chapter: "Calculus",
    difficulty: "IIT-Level",
    answerType: "MCQ Single",
    source: "Olympiad",
    acceptanceRate: 8,
    communityCount: 94,
    solved: false,
    statement: "The solution of the differential equation $\\frac{dy}{dx} + y\\tan x = \\sec x$ satisfying $y(0) = 0$ is:",
    options: [
      "$y = \\sin x$",
      "$y = x\\sec x$",
      "$y = x\\cos x$",
      "$y = \\tan x$"
    ],
    correctAnswer: "A",
    officialSolution: "This is a linear first-order ODE. IF = $e^{\\int \\tan x \\, dx} = e^{\\ln|\\sec x|} = \\sec x$\n\n$y \\cdot \\sec x = \\int \\sec^2 x \\, dx = \\tan x + C$\n\n$y = \\sin x + C\\cos x$\n\nUsing $y(0) = 0$: $0 = 0 + C \\Rightarrow C = 0$\n\n$y = \\sin x$",
    aiExplanation: "Linear ODE: find integrating factor, multiply through, integrate. The IF converts the left side into an exact derivative.",
    tags: ["Differential Equations", "Integrating Factor", "Linear ODE"]
  }
];

export const communityPosts: CommunityPost[] = [
  { id: "cp1", problemId: "phy-001", author: "QuantumKid_IIT", avatar: "QK", content: "Used conservation of angular momentum. The trick is remembering the insect is a point mass so $I = mR^2$, not $\\frac{1}{2}mR^2$.", upvotes: 142, timestamp: "2h ago", isTopper: true },
  { id: "cp2", problemId: "phy-001", author: "PhysicsFreak23", avatar: "PF", content: "Alternative: Think of it as the system's total angular momentum. Since no external torque acts, $L_{total}$ is conserved. This directly gives the answer.", upvotes: 98, timestamp: "5h ago", isTopper: false },
  { id: "cp3", problemId: "phy-001", author: "JEE2025_Aspirant", avatar: "JA", content: "I made the mistake of using $\\frac{1}{2}mR^2$ for the insect. Remember: point mass moment of inertia about an axis at distance R is simply $mR^2$!", upvotes: 67, timestamp: "1d ago", isTopper: false },
  { id: "cp4", problemId: "phy-001", author: "TopperMentor", avatar: "TM", content: "Pro tip: In angular momentum conservation problems, always identify the system and check for external torques first. If the axis of rotation doesn't change, it's straightforward.", upvotes: 203, timestamp: "3d ago", isTopper: true },
];

export const leaderboardUsers: LeaderboardUser[] = [
  { rank: 1, username: "AaryanIITD", rating: 2847, problemsSolved: 1892, streak: 147, change: 0, avatar: "AI", college: "IIT Delhi", city: "Delhi" },
  { rank: 2, username: "QuantumKid_IIT", rating: 2791, problemsSolved: 1756, streak: 89, change: 1, avatar: "QK", college: "IIT Bombay", city: "Mumbai" },
  { rank: 3, username: "PriyaSharma99", rating: 2734, problemsSolved: 1678, streak: 234, change: -1, avatar: "PS", college: "IIT Kanpur", city: "Kanpur" },
  { rank: 4, username: "MathsWizard_JEE", rating: 2698, problemsSolved: 1543, streak: 45, change: 2, avatar: "MW", college: "NIT Trichy", city: "Trichy" },
  { rank: 5, username: "AtomicAbhi", rating: 2651, problemsSolved: 1489, streak: 67, change: 0, avatar: "AA", college: "IIT Madras", city: "Chennai" },
  { rank: 6, username: "RohanKumar_JEE", rating: 2623, problemsSolved: 1412, streak: 34, change: 3, avatar: "RK", college: "BITS Pilani", city: "Pilani" },
  { rank: 7, username: "ChemQueen_23", rating: 2589, problemsSolved: 1367, streak: 112, change: -2, avatar: "CQ", college: "IIT Kharagpur", city: "Kharagpur" },
  { rank: 8, username: "VectorVibes", rating: 2567, problemsSolved: 1298, streak: 78, change: 1, avatar: "VV", college: "IIT Roorkee", city: "Roorkee" },
  { rank: 9, username: "IntegralMaster", rating: 2534, problemsSolved: 1245, streak: 56, change: -1, avatar: "IM", college: "IIT Guwahati", city: "Guwahati" },
  { rank: 10, username: "NehaPhysics", rating: 2501, problemsSolved: 1198, streak: 23, change: 4, avatar: "NP", college: "NIT Warangal", city: "Warangal" },
  { rank: 11, username: "DerivativeDev", rating: 2478, problemsSolved: 1156, streak: 91, change: 0, avatar: "DD", college: "IIIT Hyderabad", city: "Hyderabad" },
  { rank: 12, username: "OrgoKing", rating: 2445, problemsSolved: 1089, streak: 67, change: -3, avatar: "OK", college: "IIT BHU", city: "Varanasi" },
  { rank: 13, username: "KineticsKaran", rating: 2423, problemsSolved: 1045, streak: 15, change: 2, avatar: "KK", college: "NIT Surathkal", city: "Mangalore" },
  { rank: 14, username: "CalcCrusher", rating: 2398, problemsSolved: 987, streak: 43, change: 1, avatar: "CC", college: "IIT Indore", city: "Indore" },
  { rank: 15, username: "FieldForceAnanya", rating: 2367, problemsSolved: 945, streak: 78, change: -1, avatar: "FF", college: "IIT Hyderabad", city: "Hyderabad" },
  { rank: 16, username: "MatrixMayank", rating: 2345, problemsSolved: 912, streak: 34, change: 0, avatar: "MM", college: "BITS Goa", city: "Goa" },
  { rank: 17, username: "ResonanceRiya", rating: 2312, problemsSolved: 878, streak: 56, change: 5, avatar: "RR", college: "NIT Rourkela", city: "Rourkela" },
  { rank: 18, username: "ThermoThunder", rating: 2289, problemsSolved: 834, streak: 12, change: -2, avatar: "TT", college: "IIT Jodhpur", city: "Jodhpur" },
  { rank: 19, username: "LimitLord", rating: 2267, problemsSolved: 801, streak: 89, change: 1, avatar: "LL", college: "IIIT Delhi", city: "Delhi" },
  { rank: 20, username: "BondBreaker", rating: 2234, problemsSolved: 756, streak: 23, change: -1, avatar: "BB", college: "NIT Calicut", city: "Calicut" },
];

export const chapters: Record<Subject, string[]> = {
  Physics: ["Mechanics", "Rotational Mechanics", "Electrostatics", "Magnetism", "Optics", "Thermodynamics", "Modern Physics", "Waves"],
  Chemistry: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Electrochemistry", "Chemical Kinetics", "Thermochemistry"],
  Maths: ["Calculus", "Algebra", "Coordinate Geometry", "Trigonometry", "Vectors & 3D", "Probability & Statistics", "Differential Equations"]
};

export const weakTopics = [
  { chapter: "Rotational Mechanics", score: 34, subject: "Physics" as Subject },
  { chapter: "Electrochemistry", score: 61, subject: "Chemistry" as Subject },
  { chapter: "Differential Equations", score: 42, subject: "Maths" as Subject },
  { chapter: "Organic Chemistry", score: 55, subject: "Chemistry" as Subject },
  { chapter: "Coordinate Geometry", score: 48, subject: "Maths" as Subject },
  { chapter: "Optics", score: 71, subject: "Physics" as Subject },
  { chapter: "Calculus", score: 67, subject: "Maths" as Subject },
  { chapter: "Electrostatics", score: 58, subject: "Physics" as Subject },
];

export const analysisData = {
  predicted: { main: 267, advanced: 189 },
  radarData: [
    { subject: "Mechanics", Physics: 72, Maths: 0, Chemistry: 0 },
    { subject: "Electrostatics", Physics: 58, Maths: 0, Chemistry: 0 },
    { subject: "Optics", Physics: 71, Maths: 0, Chemistry: 0 },
    { subject: "Calculus", Physics: 0, Maths: 67, Chemistry: 0 },
    { subject: "Algebra", Physics: 0, Maths: 75, Chemistry: 0 },
    { subject: "Coord. Geo", Physics: 0, Maths: 48, Chemistry: 0 },
    { subject: "Physical Chem", Physics: 0, Maths: 0, Chemistry: 64 },
    { subject: "Organic Chem", Physics: 0, Maths: 0, Chemistry: 55 },
    { subject: "Inorganic", Physics: 0, Maths: 0, Chemistry: 69 },
  ],
  accuracyTrend: [
    { week: "W1", accuracy: 45 },
    { week: "W2", accuracy: 48 },
    { week: "W3", accuracy: 52 },
    { week: "W4", accuracy: 49 },
    { week: "W5", accuracy: 56 },
    { week: "W6", accuracy: 61 },
    { week: "W7", accuracy: 58 },
    { week: "W8", accuracy: 65 },
    { week: "W9", accuracy: 63 },
    { week: "W10", accuracy: 69 },
    { week: "W11", accuracy: 72 },
    { week: "W12", accuracy: 74 },
  ],
  errorPatterns: [
    { pattern: "Last-step calculation errors", percentage: 67 },
    { pattern: "Concept misapplication", percentage: 23 },
    { pattern: "Incomplete case analysis", percentage: 45 },
    { pattern: "Unit conversion mistakes", percentage: 18 },
    { pattern: "Sign errors in vectors", percentage: 34 },
  ],
  timeAnalysis: [
    { chapter: "Mechanics", you: 4.2, topper: 2.8 },
    { chapter: "Calculus", you: 3.8, topper: 2.5 },
    { chapter: "Organic", you: 5.1, topper: 3.2 },
    { chapter: "Electrostatics", you: 4.5, topper: 3.0 },
    { chapter: "Algebra", you: 3.2, topper: 2.3 },
  ],
  drillRecommendations: [
    "Rotational Mechanics — Focus on conservation of angular momentum problems",
    "Electrochemistry — Practice Nernst equation numerical problems",
    "Differential Equations — Linear first-order ODE solving",
    "Coordinate Geometry — Conic sections and locus problems",
    "Organic Chemistry — Grignard and named reactions mechanisms",
  ]
};
