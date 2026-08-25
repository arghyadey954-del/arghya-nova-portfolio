export const PROFILE = {
  name: "Arghya Kamal Dey",
  role: "CSE (Data Science) Student",
  university: "Kazi Nazrul University",
  batch: "Batch 2024 – 2028",
  location: "West Bengal, India",
  email: "arghyakamaldey@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  taglines: [
    "Data Science Enthusiast",
    "Machine Learning Explorer",
    "Full-Stack Builder",
    "Problem Solver",
  ],
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const STATS = [
  { value: "2028", label: "Graduating" },
  { value: "8+", label: "Projects Built" },
  { value: "12+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: 88 },
      { name: "C", level: 78 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Data Science & ML",
    items: [
      { name: "NumPy / Pandas", level: 85 },
      { name: "Scikit-learn", level: 76 },
      { name: "Matplotlib / Seaborn", level: 82 },
      { name: "TensorFlow", level: 62 },
    ],
  },
  {
    title: "Web & Tools",
    items: [
      { name: "React / TypeScript", level: 74 },
      { name: "HTML / CSS", level: 90 },
      { name: "Git & GitHub", level: 80 },
      { name: "Jupyter / Colab", level: 88 },
    ],
  },
];

export const MARQUEE = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "SQL",
  "React",
  "TypeScript",
  "Git",
  "Matplotlib",
  "Streamlit",
  "Jupyter",
];

export const PROJECTS = [
  {
    title: "InsightBoard",
    blurb:
      "An interactive analytics dashboard that turns raw CSV data into live charts, correlation heatmaps and auto-generated insight summaries.",
    tags: ["Python", "Pandas", "Streamlit", "Plotly"],
    accent: "cyan" as const,
    demo: "#",
    code: "#",
  },
  {
    title: "NeuroDigit",
    blurb:
      "A convolutional neural network for handwritten digit recognition with a live canvas where predictions update as you draw.",
    tags: ["TensorFlow", "Keras", "NumPy", "Flask"],
    accent: "violet" as const,
    demo: "#",
    code: "#",
  },
  {
    title: "PricePulse",
    blurb:
      "Regression pipeline predicting housing prices with feature engineering, cross-validation and explainable model outputs.",
    tags: ["Scikit-learn", "Pandas", "Seaborn"],
    accent: "cyan" as const,
    demo: "#",
    code: "#",
  },
  {
    title: "CampusFlow",
    blurb:
      "A student utility web app for timetable tracking, attendance math and CGPA forecasting with an offline-first UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    accent: "violet" as const,
    demo: "#",
    code: "#",
  },
  {
    title: "SentiStream",
    blurb:
      "Real-time sentiment classifier for social text streams using TF-IDF and a lightweight ensemble served over an API.",
    tags: ["Python", "NLTK", "FastAPI"],
    accent: "cyan" as const,
    demo: "#",
    code: "#",
  },
  {
    title: "VizLab",
    blurb:
      "A collection of storytelling data visualisations exploring public datasets on climate, education and mobility.",
    tags: ["Matplotlib", "Seaborn", "Jupyter"],
    accent: "violet" as const,
    demo: "#",
    code: "#",
  },
];

export const EDUCATION = [
  {
    period: "2024 — 2028",
    title: "B.Tech, Computer Science & Engineering (Data Science)",
    org: "Kazi Nazrul University",
    detail:
      "Core focus on data structures, statistics, machine learning, database systems and applied analytics.",
    current: true,
  },
  {
    period: "2022 — 2024",
    title: "Higher Secondary (Science)",
    org: "West Bengal Council of Higher Secondary Education",
    detail: "Physics, Chemistry, Mathematics and Computer Science.",
    current: false,
  },
  {
    period: "2022",
    title: "Secondary Education",
    org: "West Bengal Board of Secondary Education",
    detail: "Built the first foundations in programming and mathematics.",
    current: false,
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Data Science Coursework",
    detail: "Completed applied machine learning and Python for data analysis certifications.",
    badge: "Certified",
  },
  {
    title: "Hackathon Participant",
    detail: "Built and pitched a data-driven prototype under a 24-hour build constraint.",
    badge: "24h Build",
  },
  {
    title: "Open Source Contributions",
    detail: "Contributing documentation and small fixes to Python data tooling repositories.",
    badge: "Community",
  },
  {
    title: "Academic Consistency",
    detail: "Maintaining strong semester performance across core CSE and data science subjects.",
    badge: "Academics",
  },
];
