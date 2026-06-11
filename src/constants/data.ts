export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  challenges: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export const PERSONAL_INFO = {
  name: "Tran Quang Thong",
  title: "Software Engineer",
  subtitle: "Specializing in Production-Grade Backend APIs & Distributed Architectures",
  about: `Backend Engineer with hands-on experience designing and developing production-grade RESTful APIs using NestJS, TypeScript, .NET, MongoDB, and SQL Server. Experienced in building high-performance e-commerce, logistics, and digital transformation systems with role-based access control, complex query optimization, and secure third-party integrations.`,
  tagline: "Building scalable backend systems with a focus on clean architecture, clean code, and maximum performance.",
  email: "quangthong211101@gmail.com",
  phone: "0367262415",
  location: "Da Nang, Vietnam",
  github: "https://github.com/thong21112001",
  linkedin: "https://www.linkedin.com/in/quang-thong-tran-4885b3238",
  facebook: "https://www.facebook.com/quangthong211101",
  dob: "21/11/2001"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Frameworks",
    skills: [
      { name: "NestJS / Node.js", level: 90 },
      { name: "ASP.NET Core / .NET 8", level: 85 },
      { name: "Entity Framework Core", level: 85 },
      { name: "Mongoose ODM", level: 85 }
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript / JavaScript", level: 90 },
      { name: "C#", level: 85 },
      { name: "Python", level: 70 },
      { name: "Java / C++", level: 60 }
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB & Aggregation", level: 90 },
      { name: "SQL Server / MySQL", level: 85 },
      { name: "Redis Caching", level: 80 },
      { name: "AWS S3 / Firebase Storage", level: 80 }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 80 },
      { name: "PM2 / IIS / Nginx", level: 80 },
      { name: "Git / GitLab CI", level: 85 },
      { name: "Swagger / REST APIs", level: 90 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-api",
    title: "E-commerce Backend System",
    subtitle: "HappyCo & Vmix APIs (HIFIVEPLUS)",
    description: "Designed and implemented modular, high-volume RESTful APIs powering web and mobile e-commerce platforms. Handled complete order lifecycles including shopping carts, voucher validation, inventory, dynamic pricing, and carrier dispatch.",
    techStack: ["NestJS", "TypeScript", "MongoDB", "Redis", "AWS S3", "Swagger"],
    challenges: [
      "Optimized MongoDB aggregation pipelines to retrieve complex metrics, speeding up dashboard queries by 35%.",
      "Integrated multi-carrier shipping APIs (GHN & Viettel Post) with custom error handling, dynamic cost calculation, and auto-retry policies.",
      "Secured digital payments via ZaloPay, managing webhook states and reconciliation routines.",
      "Applied DRY and Clean Architecture structures, reducing code duplication by 40% across modules.",
      "Resolved race conditions in concurrent voucher redemption and inventory updates using Redis locks."
    ],
    links: {
      github: "https://github.com/thong21112001/dashboard-vmix-admin"
    }
  },
  {
    id: "gov-platform",
    title: "Provincial Digital Transformation Platform",
    subtitle: "e-Government Portals (Khang Thi Group)",
    description: "Participated in development and deployment of digital public service portals for multiple provinces (Quang Tri, Quang Ngai, Dak Lak) aligning with Vietnam's National Digital Transformation roadmap.",
    techStack: ["ASP.NET Core", "C#", "SQL Server", "Bootstrap", "jQuery", "ASP.NET Identity"],
    challenges: [
      "Built custom forms, secure e-citizen registration, document tracking, and custom approval workflow managers.",
      "Created high-performance batch processing and background export features, allowing seamless handling of thousands of concurrent portal submissions.",
      "Enforced rigid Role-Based Access Control (RBAC) and data sanitization guidelines, shielding sensitive public operations."
    ]
  },
  {
    id: "imenu",
    title: "iMenu - Digital Menu & Smart Ordering",
    subtitle: "F&B Digital Transformation SaaS",
    description: "A digital menu and instant order management SaaS deployed across 50+ nationwide food & beverage businesses, enabling real-time table orders, kitchen alerts, and automated receipts.",
    techStack: [".NET 8", "C#", "Razor Pages", "EF Core", "SQL Server", "Firebase Storage", "Firebase Auth (OTP)", "IIS"],
    challenges: [
      "Designed a real-time order synchronization loop, guaranteeing instant order notifications for staff and kitchen.",
      "Built a secure client authentication mechanism using Firebase OTP SMS and hosted the platform on IIS (imenu.space & menudientu.com).",
      "Implemented a CQRS design pattern combined with Repository & Unit of Work for reliable transactional isolation."
    ],
    links: {
      github: "https://github.com/thong21112001/Menulo-Super"
    }
  },
  {
    id: "fotosnap",
    title: "Fotosnap",
    subtitle: "Instagram Clone",
    description: "A fullstack social media clone application for photo sharing, emphasizing clean code, modern UI interfaces, and fast client-side navigation.",
    techStack: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "MongoDB"],
    challenges: [
      "Engineered clean state synchronization between client and server APIs using modular structures.",
      "Configured lightweight responsive media handling and offloaded image storage structures."
    ],
    links: {
      github: "https://github.com/thong21112001/fotosnap"
    }
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-hifiveplus",
    role: "Backend Developer",
    company: "HIFIVEPLUS",
    period: "11/2025 - Present",
    description: [
      "Designed and developed modular RESTful APIs using NestJS, TypeScript, and MongoDB for large-scale e-commerce operations.",
      "Built advanced order lifecycle flows: custom cart rules, voucher validations, dynamic pricing, and carrier dispatch integrations (GHN, Viettel Post).",
      "Optimized database read/write cycles by engineering complex MongoDB Aggregation pipelines, reducing page load latencies.",
      "Refactored legacy services into modular layers, trimming codebase size by 40% and enhancing maintainability."
    ],
    skills: ["NestJS", "TypeScript", "MongoDB", "Redis", "AWS S3", "ZaloPay", "GHN / Viettel Post"]
  },
  {
    id: "exp-khangthi",
    role: ".NET Developer",
    company: "Khang Thi Group",
    period: "11/2024 - 11/2025",
    description: [
      "Developed web platforms and e-Government public portals for multiple provinces in Vietnam.",
      "Built citizen registration modules, document management, and reporting dashboard components using .NET and SQL Server.",
      "Engineered real-time truck scale management features for logistics operations utilizing SQL databases and Clean Architecture."
    ],
    skills: [".NET Core", "C#", "SQL Server", "Clean Architecture", "Identity", "IIS"]
  },
  {
    id: "exp-intern",
    role: "IT Intern",
    company: "Vinacen",
    period: "02/2023 - 05/2023",
    description: [
      "Assisted in frontend UI development using HTML, CSS, Bootstrap, jQuery, and AJAX.",
      "Conducted integration testing and created system documentation for internal applications."
    ],
    skills: ["HTML", "CSS", "Bootstrap", "jQuery", "AJAX", "Manual Testing"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-dtu",
    degree: "Bachelor of Software Engineering",
    school: "Duy Tan University",
    period: "08/2019 - 07/2023",
    details: "GPA: 3.64 / 4.0. Focused on software architecture, clean patterns, database design, and object-oriented paradigms."
  }
];

export const CERTIFICATIONS = [
  { name: "Japanese Language Proficiency Test (JLPT) - N5", date: "21/10/2023" },
  { name: "TOEIC 500", date: "2023" }
];
