export interface SiteConfig {
  name: string;
  displayName: string;
  role: string;
  tagline: string;
  email: string;
  linkedin: string;
  github: string;
  university: string;
  program: string;
  semester: string;
}

export const siteConfig: SiteConfig = {
  name: "Andita Bilqis Aulia Rahma",
  displayName: "BILQIS.",
  role: "Software Engineer · Full Stack Developer · UI/UX Designer",
  tagline: "Computer Science Software Engineering Student building things that solve real problems.",
  email: "andita.bilqis19@gmail.com",
  linkedin: "https://www.linkedin.com/in/anditabilqis",
  github: "https://github.com/beelbil",
  university: "BINUS University",
  program: "Computer Science · Software Engineering",
  semester: "5th Semester"
};

export const aboutData: string[] = [
  "A 5th-semester Computer Science student at BINUS University, passionate about technology and visual storytelling.",
  "Specializing in Software Engineering, with interests in Full Stack Development, Quality Assurance, AI, Data, and Automation.",
  "Grateful to have been entrusted with projects involving AI-generated video, website, and application development.",
  "Active member of BINUS TV Club, exploring creative content through video production and editing."
];

export interface EducationItem {
  institution: string;
  period: string;
  degree: string;
  major: string;
  description: string;
}

export const educationData: EducationItem[] = [
  {
    institution: "BINUS University",
    period: "2024 - Present",
    degree: "BACHELOR OF COMPUTER SCIENCE · SOFTWARE ENGINEERING",
    major: "Computer Science",
    description: "The journey so far — turning curiosity into code, exploring software engineering, and learning to build solutions that are both thoughtful and scalable."
  },
  {
    institution: "SMA Sulthon Aulia Boarding School",
    period: "2021 - 2024",
    degree: "SENIOR HIGH SCHOOL",
    major: "Islamic Studies · Boarding School",
    description: "A transformative chapter that shaped me to be open-minded while remaining grounded in strong values."
  },
  {
    institution: "Sekolah Pilar Indonesia",
    period: "2012 - 2021",
    degree: "KINDERGARTEN · ELEMENTARY · JUNIOR HIGH SCHOOL",
    major: "International Baccalaureate (IB) Curriculum",
    description: "The foundation years — developing curiosity, analytical thinking, and an open-minded perspective."
  }
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Programming / Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python & NLP",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "SQL",
      "PostgreSQL"
    ]
  },
  {
    category: "Microsoft / Low-Code",
    skills: [
      "Power Apps",
      "Power Automate",
      "Power BI",
      "SharePoint"
    ]
  },
  {
    category: "Design",
    skills: [
      "Figma",
      "FigJam",
      "Canva"
    ]
  },
  {
    category: "Development / Deployment",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Hostinger"
    ]
  },
  {
    category: "AI",
    skills: [
      "Google Gemini"
    ]
  },
  {
    category: "AI Creative",
    skills: [
      "Google Flow",
      "AI Video Generation"
    ]
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  category: "implemented" | "concept";
  link?: string;
  thumbnail: string;
  description: string;
  tech: string[];
  linkType?: "live" | "figma" | "colab" | "video";
  linkLabel?: string;
  videoDemo?: string;
  screenshots?: string;
}

export const projectsData: ProjectItem[] = [
  // =========================================================
  // IMPLEMENTED / REAL PROJECTS
  // =========================================================

  {
    id: "limeda-website",
    title: "Limeda Website",
    type: "Work Project · Website",
    category: "implemented",
    link: "https://limeda.co.id/mine-dewatering-pumps",
    thumbnail: "/images/projects/limeda.jpg",
    description:
      "A responsive company website built to strengthen the company's digital presence and showcase its services. Developed using a web builder with custom HTML, CSS, JavaScript, and integrated code for enhanced functionality and navigation.",
    tech: [
      "Web Builder",
      "HTML/CSS",
      "JavaScript",
      "Integrated Code"
    ],
    linkType: "live",
    linkLabel: "OPEN LIVE PROJECT"
  },

  {
    id: "power-app-attendance",
    title: "Power App Attendance (Limeda)",
    type: "Work Project · Application",
    category: "implemented",
    thumbnail: "/images/projects/attendance.png",
    description:
      "An internal attendance and leave management app built with Microsoft Power Apps, featuring GPS-based check-in/out, office selection, sick leave, leave requests, approval tracking, and SharePoint data integration. Accessible through Microsoft Teams.",
    tech: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Microsoft Teams",
      "Microsoft Approvals"
    ],
    screenshots: "/images/projects/attendance-screenshots/"
  },

  {
    id: "power-app-finance",
    title: "Power App Financial Request (Limeda)",
    type: "Work Project · Application",
    category: "implemented",
    thumbnail: "/images/projects/finance.png",
    description:
      "A cash request and expense management app that streamlines multi-level approval, fund disbursement, expense declaration, and reconciliation, helping Finance manage monthly audits with less manual administrative work.",
    tech: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Microsoft Teams",
      "Microsoft Approvals"
    ]
  },

  {
    id: "ai-personality-reranker",
    title: "AI Personality Reranker",
    type: "Machine Learning Group Project",
    category: "implemented",
    link: "https://ai-personality-reranker.vercel.app/",
    thumbnail: "/images/projects/aireranker.jpg",
    description:
      "A bilingual AI response-quality classifier that evaluates candidate responses based on emotional appropriateness and tone alignment. Powered by four trained models — fine-tuned mBERT, Small Transformer, Bi-LSTM, and TF-IDF — to classify responses as warm or cold in real time.",
    tech: [
      "Python",
      "NLP",
      "mBERT",
      "Transformers",
      "Bi-LSTM",
      "TF-IDF",
      "Machine Learning",
      "Vercel"
    ],
    linkType: "live",
    linkLabel: "OPEN LIVE PROJECT"
  },

  {
    id: "ai-finance-video",
    title: "AI-Generated Finance Video",
    type: "Freelance Project",
    category: "implemented",
    thumbnail: "/images/projects/aivideo.png",
    description:
      "A freelance AI video production project, creating a 5-minute finance-focused corporate video using AI-generated visuals. Responsible for AI prompting, visual direction, video generation, voice-over, background music, and editing to deliver a cohesive and engaging final video.",
    tech: [
      "OpenAI GPT",
      "Google Gemini",
      "Google Flow",
      "AI Video Generation",
      "Prompt Engineering",
      "Video Editing"
    ],
    linkType: "video",
    linkLabel: "WATCH PROJECT",
    videoDemo: "/videos/ai-video-preview.mp4"
  },

  {
    id: "healthscan-ai",
    title: "HealthScan AI — Pneumonia Screening",
    type: "Artificial Intelligence Group Project",
    category: "implemented",
    link: "https://colab.research.google.com/drive/1n-vvUwCppDKPKYd8_lw2l_IpIxB3hTmA?usp=sharing",
    thumbnail: "/images/projects/healthscan.jpg",
    description:
      "A machine learning group project for classifying chest X-ray images into Normal, Pneumonia, or COVID-19 using a ResNet50-based transfer learning approach, achieving 94.66% test accuracy.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "ResNet50",
      "Computer Vision",
      "Transfer Learning",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Flask",
      "Docker",
      "DigitalOcean"
    ],
    linkType: "colab",
    linkLabel: "VIEW NOTEBOOK",
    videoDemo: "/videos/health-scan-demo.mp4"
  },

  {
    id: "titipin",
    title: "Titip.in",
    type: "Software Engineering Project",
    category: "implemented",
    link: "https://titipin-v2bx.vercel.app/",
    thumbnail: "/images/projects/titipin.png",
    description:
      "A Software Engineering group project that digitizes campus food delivery by connecting students, jastipers, and food vendors through structured ordering, real-time tracking, digital menus, ratings, and secure user access.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "RLS",
      "Vercel",
      "GitHub"
    ],
    linkType: "live",
    linkLabel: "OPEN LIVE PROJECT"
  },

  // =========================================================
  // CONCEPT / DESIGN & PROTOTYPING
  // =========================================================

  {
    id: "fontdale",
    title: "FontDale",
    type: "Human Computer Interaction Project",
    category: "concept",
    link: "https://www.figma.com/design/qZVsjrD0pJMrxZP60MZakT/FontDale-HCI-Project?node-id=0-1&t=pm5pWmOKws5WFdfo-1",
    thumbnail: "/images/projects/fontdale.jpg",
    description:
      "HCI Lab project focused on designing a modern premium digital destination for shopping, dining, culture, and curated urban experiences. The project explores user-centered design principles to create an elegant, immersive, and intuitive digital experience.",
    tech: [
      "Figma",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    linkType: "figma",
    linkLabel: "VIEW PROTOTYPE"
  },

  {
    id: "carbonova",
    title: "Carbonova",
    type: "Human Computer Interaction Group Project",
    category: "concept",
    link: "https://www.figma.com/design/u54YkAUQY8tO3f4ESBKzeN/CARBONOVA?node-id=0-1&t=MTTdVDgR6389vchj-1",
    thumbnail: "/images/projects/carbonova.jpg",
    description:
      "Project aligned with SDG 13: Climate Action, designed to help users track personal carbon emissions from transportation, electricity, and device usage. The platform provides insights, recommendations, missions, and progress tracking to encourage more sustainable habits.",
    tech: [
      "Figma",
      "Mobile Apps",
      "UI/UX Design",
      "Human-Computer Interaction",
      "User Research",
      "Prototyping"
    ],
    linkType: "figma",
    linkLabel: "VIEW PROTOTYPE"
  },

  {
    id: "kiddocare",
    title: "Kiddo Care",
    type: "Creative Innovation Project",
    category: "concept",
    link: "https://www.figma.com/design/aOeoxXPDFJvkxy8tj8CW9Z/Kiddo-Care?node-id=1-2451&t=oRhl3952iNCNYZqy-1",
    thumbnail: "/images/projects/kiddocare.png",
    description:
      "Product design concept for a babysitting platform that connects parents with trusted babysitters. The concept focuses on transparency through babysitter profiles, in-app communication, and child monitoring features, creating a safer and more informed babysitting experience.",
    tech: [
      "Figma",
      "UI/UX Design",
      "Prototyping",
      "User Research"
    ],
    linkType: "figma",
    linkLabel: "VIEW PROTOTYPE"
  }
];

export interface ExperienceItem {
  organization: string;
  role: string;
  keywords: string;
  description: string;
}

export const experienceData: ExperienceItem[] = [
  {
    organization: "BINUS TV Club",
    role: "Secretary",
    keywords: "Administration · Event Management · Coordination · Communication · Documentation",
    description:
      "Managed organizational administration, documentation, and internal coordination while supporting event operations and collaborating with different teams."
  },
  {
    organization: "HIMTI BINUS University",
    role: "Event MC, Committee, Activist Commission 2",
    keywords: "Public Speaking · Event Hosting · Communication · Event Management",
    description:
      "Hosted formal and semi-formal events, managed the event flow from opening to closing, and facilitated communication between speakers, committees, and audiences."
  },
  {
    organization: "Freshmen Program BINUS",
    role: "Freshmen Partner",
    keywords: "Mentoring · Communication · Leadership · Teamwork",
    description:
      "Guided and supported freshmen throughout a one-year program, delivered presentations and session materials, maintained consistent communication with participants, and contributed to creating an engaging and supportive student experience."
  },
  {
    organization: "Teach For Indonesia",
    role: "Education Volunteer",
    keywords: "Teaching · Communication · Presentation · Adaptability",
    description:
      "Supported English learning activities by preparing learning materials, explaining concepts in an accessible way, and adapting communication to different learners."
  }
];

export interface AchievementItem {
  title: string;
  date: string;
  description: string;
  certificate?: string;
  link?: string;
  proof?: string;
  logo?: string;
}

export const achievementsData: AchievementItem[] = [
  {
    title: "1st Winner at Freshmen Project B2028 BINUS @Bekasi",
    date: "June 2025",
    description:
      "Collaborated on concept development and led the video editing process to support the team's final project submission.",
    certificate: "/images/achievements/first-winner.jpeg",
    link: "https://drive.google.com/file/d/1CwrkoBr-6K12rHWoJRFFvaSCdXuFaUsA/view?usp=share_link"
  },
  {
    title: "Finalist Digital Business Innovation - UNRI",
    date: "October 2025",
    description:
      "Developed the business idea Code Z, a gamified coding platform designed to address skill gaps between graduates and industry requirements. The concept combines interactive coding challenges with a game-like experience to help users improve their technical skills, while automatically generating a CV based on their learning progress and achievements.",
    proof: "/images/achievements/code-z-proof.png",
    logo: "/images/achievements/code-z.png"
  }
];