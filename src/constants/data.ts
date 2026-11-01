export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  challenges: string[];
  architectureFlow: string[];
  metrics: string[];
  links?: {
    github?: string;
    demo?: string;
    demos?: { label: string; url: string }[];
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
  gpa?: string;
}

export interface SkillCategory {
  title: string;
  iconName: "server" | "code" | "database" | "integrations";
  color: string;
  skills: string[];
}

export interface HighlightMetric {
  value: string;
  label: string;
  detail: string;
}

export interface TechnicalHighlight {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  iconName: "lock" | "database" | "layers" | "refresh-cw";
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
}

export const PERSONAL_INFO = {
  name: "Tran Quang Thong",
  title: "Backend Software Engineer",
  subtitle: "NestJS / TypeScript • ASP.NET Core (.NET 8) • Distributed Systems",
  about: "Backend Engineer with 2+ years of production experience designing resilient RESTful APIs, high-throughput e-commerce systems, and SaaS platforms. Specialized in MongoDB aggregation tuning, Redis concurrency control, and clean modular architectures.",
  tagline: "Building scalable backend systems with a focus on clean architecture, clean code, and maximum performance.",
  email: "quangthong211101@gmail.com",
  phone: "0367262415",
  location: "Da Nang, Vietnam",
  github: "https://github.com/thong21112001",
  linkedin: "https://www.linkedin.com/in/quang-thong-tran-4885b3238",
  facebook: "https://www.facebook.com/quangthong211101",
  dob: "21/11/2001",
  resumePath: "/TranQuangThong_CV_EN.pdf"
};

export const HIGHLIGHT_METRICS: HighlightMetric[] = [
  { value: "2+", label: "Years Backend Exp", detail: "NestJS & .NET 8 in Production" },
  { value: "50+", label: "Active F&B Stores", detail: "iMenu SaaS Nationwide" },
  { value: "35%", label: "Query Speedup", detail: "MongoDB Aggregation & Redis" },
  { value: "3.64", label: "Engineering GPA", detail: "Duy Tan University (/4.0)" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Backend & Architecture",
    iconName: "server",
    color: "violet",
    skills: [
      "NestJS",
      "Node.js",
      "ASP.NET Core (.NET 8)",
      "Clean Architecture",
      "CQRS",
      "Repository & UoW",
      "RESTful APIs"
    ]
  },
  {
    title: "Languages & ORMs",
    iconName: "code",
    color: "emerald",
    skills: [
      "TypeScript",
      "C#",
      "JavaScript",
      "SQL",
      "Entity Framework Core",
      "Mongoose ODM",
      "LINQ"
    ]
  },
  {
    title: "Databases, Caching & Cloud",
    iconName: "database",
    color: "blue",
    skills: [
      "MongoDB (Aggregation)",
      "SQL Server",
      "MySQL",
      "Redis (Caching & Locks)",
      "AWS S3",
      "Firebase (Auth/Storage)"
    ]
  },
  {
    title: "Integrations & DevOps",
    iconName: "integrations",
    color: "amber",
    skills: [
      "ZaloPay Webhook",
      "GHN & Viettel Post APIs",
      "Docker",
      "IIS / Nginx / PM2",
      "Git / GitLab CI",
      "Swagger / OpenAPI"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-api",
    title: "E-commerce Backend System",
    subtitle: "Backend Developer • HIFIVEPLUS",
    description: "Designed and implemented high-volume, modular RESTful APIs powering web and mobile e-commerce platforms. Handled complete order lifecycles including shopping carts, voucher validation, inventory, dynamic pricing, and carrier dispatch.",
    techStack: ["NestJS", "TypeScript", "MongoDB", "Redis", "AWS S3", "Swagger", "ZaloPay", "GHN / Viettel Post"],
    architectureFlow: [
      "Client Apps",
      "NestJS REST API + RBAC",
      "Redis Distributed Lock (Voucher/Stock)",
      "MongoDB Aggregation Pipelines",
      "ZaloPay Webhook & GHN/ViettelPost Retry"
    ],
    metrics: [
      "35% Faster Dashboard Queries",
      "40% Code Duplication Reduction",
      "Zero Concurrency Collisions"
    ],
    challenges: [
      "Optimized MongoDB aggregation pipelines to retrieve complex metrics, speeding up dashboard queries by 35%.",
      "Integrated multi-carrier shipping APIs (Giao Hang Nhanh & Viettel Post) with custom error handling, dynamic cost calculation, and auto-retry policies.",
      "Secured digital payments via ZaloPay, managing webhook states and reconciliation routines.",
      "Applied DRY and Clean Architecture structures, reducing code duplication by 40% across modules.",
      "Resolved race conditions in concurrent voucher redemption and inventory updates using Redis locks."
    ],
    links: {
      demos: [
        { label: "Vmix Vietnam", url: "https://vmixvietnam.vn" },
        { label: "Kho Mộc", url: "https://khomoc.com" },
        { label: "Giấy in Vinabill", url: "https://vinapos.info" }
      ]
    }
  },
  {
    id: "gov-platform",
    title: "Provincial Digital Transformation Platform",
    subtitle: "e-Government Portals • Khang Thi Group",
    description: "Engineered and deployed digital public service portals for multiple provinces (Quang Tri, Quang Ngai, Dak Lak) aligning with Vietnam's National Digital Transformation roadmap.",
    techStack: ["ASP.NET Core", ".NET 8", "C#", "SQL Server", "ASP.NET Identity", "Bootstrap", "IIS"],
    architectureFlow: [
      "e-Citizen Portal",
      "ASP.NET Core Identity & RBAC",
      "Approval Workflow Engine",
      "Batch Export & High-Concurrency Queue",
      "SQL Server"
    ],
    metrics: [
      "Thousands of Concurrent Submissions",
      "100% Audit Trail Compliance",
      "Automated Multi-Stage Approval Engine"
    ],
    challenges: [
      "Built custom forms, secure e-citizen registration, document tracking, and custom approval workflow managers.",
      "Created high-performance batch processing and background export features, allowing seamless handling of thousands of concurrent portal submissions.",
      "Enforced rigid Role-Based Access Control (RBAC) and data sanitization guidelines, shielding sensitive public operations."
    ],
    links: {
      demos: [
        { label: "CSDL Nông Nghiệp Quảng Trị", url: "https://csdlnn.quangtri.gov.vn" }
      ]
    }
  },
  {
    id: "imenu",
    title: "iMenu - Digital Menu & Smart Ordering SaaS",
    subtitle: "F&B Digital Transformation SaaS",
    description: "A digital menu and instant order management SaaS deployed across 50+ nationwide food & beverage businesses, enabling real-time table orders, kitchen alerts, and automated receipts.",
    techStack: [".NET 8", "C#", "EF Core", "SQL Server", "Firebase Auth (OTP)", "Firebase Storage", "IIS"],
    architectureFlow: [
      "QR Table Order",
      "Firebase OTP Auth",
      ".NET 8 CQRS + Unit of Work",
      "Real-time Kitchen Sync",
      "SQL Server & Firebase Storage"
    ],
    metrics: [
      "50+ Active Stores Nationwide",
      "Sub-second Kitchen Order Sync",
      "Zero-downtime Order Processing"
    ],
    challenges: [
      "Designed a real-time order synchronization loop, guaranteeing instant order notifications for staff and kitchen.",
      "Built a secure client authentication mechanism using Firebase OTP SMS and hosted the platform on IIS (imenu.space & menudientu.com).",
      "Implemented a CQRS design pattern combined with Repository & Unit of Work for reliable transactional isolation."
    ],
    links: {
      demos: [
        { label: "iMenu Space", url: "https://imenu.space" },
        { label: "Menu Điện Tử", url: "https://menudientu.com" }
      ]
    }
  },
  {
    id: "logistics-scale",
    title: "Real-time Truck Scale & Logistics System",
    subtitle: "Industrial Logistics • Khang Thi Group",
    description: "High-reliability industrial scale management software interfacing with physical weighing sensors, automating vehicle dispatch, weighbridge ticket printing, and synchronizing data with enterprise ERP systems.",
    techStack: [".NET 8", "C#", "SQL Server", "Clean Architecture", "Serial Port / RS232", "EF Core", "IIS"],
    architectureFlow: [
      "Truck Weighbridge Sensor",
      "Serial/Socket Ingestion Service",
      ".NET 8 Clean Architecture",
      "Automated Weight Audit & Anti-Tamper",
      "SQL Server & ERP Sync"
    ],
    metrics: [
      "100% Weighing Data Accuracy",
      "<100ms Ticket Generation",
      "Continuous Offline-First Operation"
    ],
    challenges: [
      "Engineered reliable asynchronous RS232/Serial port protocol communication with industrial weighing indicators.",
      "Implemented strict weight deviation validation algorithms and anti-tampering audit logs to eliminate weighing fraud.",
      "Applied Clean Architecture and Repository pattern with SQL Server for offline-first resilience during connectivity drops."
    ],
    links: {
      demos: [
        { label: "Khang Thi Logistics", url: "http://khangthi.vn" }
      ]
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
      "Optimized database read/write cycles by engineering complex MongoDB Aggregation pipelines, reducing page load latencies by 35%.",
      "Refactored legacy services into modular layers, trimming codebase duplication by 40% and enhancing maintainability.",
      "Implemented Redis distributed locks to resolve race conditions in concurrent flash-sale voucher redemptions."
    ],
    skills: ["NestJS", "TypeScript", "MongoDB", "Redis", "AWS S3", "ZaloPay", "GHN / Viettel Post"]
  },
  {
    id: "exp-khangthi",
    role: ".NET Developer",
    company: "Khang Thi Group",
    period: "11/2024 - 11/2025",
    description: [
      "Developed web platforms and e-Government public service portals for multiple provinces in Vietnam.",
      "Built citizen registration modules, document management, and reporting dashboard components using .NET 8 and SQL Server.",
      "Engineered real-time truck scale management features for logistics operations utilizing SQL databases, RS232 serial communication, and Clean Architecture."
    ],
    skills: [".NET 8", "C#", "SQL Server", "Clean Architecture", "ASP.NET Identity", "IIS"]
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
    details: "Graduated with distinction. Focused on software architecture, clean patterns, database design, and object-oriented paradigms.",
    gpa: "3.64 / 4.0"
  }
];

export const CERTIFICATIONS = [
  { name: "TOEIC 500 (English Communication)", date: "2023", icon: "badge" },
  { name: "Japanese Language Proficiency Test (JLPT) - N5", date: "2023", icon: "languages" }
];

export const INTERVIEW_HIGHLIGHTS: TechnicalHighlight[] = [
  {
    id: "concurrency-redis",
    title: "Concurrency & Race Condition Handling",
    subtitle: "High-Volume Voucher & Stock Management",
    category: "Distributed Locking",
    iconName: "lock",
    problem: "Concurrent requests during flash sales led to duplicate voucher redemptions and negative stock counts.",
    solution: "Engineered Redis Distributed Locks with fine-grained keys and strict TTL auto-release. Paired with atomic MongoDB operations ($inc, $push) to ensure thread-safe transactions.",
    impact: "Zero race condition incidents across flash sale events; sustained 1,000+ concurrent checkout requests safely.",
    tags: ["Redis", "Distributed Locks", "NestJS", "Concurrency", "MongoDB"]
  },
  {
    id: "db-optimization",
    title: "Database Query & Aggregation Tuning",
    subtitle: "High-Throughput Analytics & Reporting",
    category: "Performance Optimization",
    iconName: "database",
    problem: "Dashboard reporting queries were scanning millions of unindexed documents, causing 2-3s request timeouts during peak business hours.",
    solution: "Refactored multi-stage MongoDB Aggregation Pipelines ($match early, optimized $lookup, compound indexing on tenant & timestamp). In .NET, applied EF Core AsNoTracking and projection queries.",
    impact: "Reduced MongoDB query response times by 35%; lowered database CPU utilization by 28% under continuous traffic.",
    tags: ["MongoDB", "Aggregation Pipelines", "Indexing", "EF Core", "SQL Server"]
  },
  {
    id: "clean-arch-cqrs",
    title: "Clean Architecture, CQRS & Modular Design",
    subtitle: "Enterprise Codebase Scalability",
    category: "Architecture & Patterns",
    iconName: "layers",
    problem: "Legacy codebase mixed business logic, database queries, and HTTP controllers, causing high coupling and regression bugs on every release.",
    solution: "Segregated domain logic into distinct Application, Domain, and Infrastructure layers. Implemented CQRS to split read queries from transactional writes, combined with Repository & Unit of Work patterns.",
    impact: "Reduced code duplication by 40%; accelerated feature onboarding time and achieved testable, decoupled domain logic.",
    tags: ["CQRS", "Clean Architecture", "Unit of Work", "NestJS Modules", ".NET 8"]
  },
  {
    id: "third-party-integrations",
    title: "Resilient Third-Party Integrations",
    subtitle: "Payment Gateways & Logistics Carriers",
    category: "Fault Tolerance & Integrations",
    iconName: "refresh-cw",
    problem: "Carrier API outages (GHN, Viettel Post) and delayed ZaloPay payment webhooks caused dropped orders and reconciliation mismatches.",
    solution: "Implemented idempotent webhook listeners with cryptographic signature checks, exponential backoff retry workers, and automated order reconciliation cron routines.",
    impact: "100% payment reconciliation rate; zero dropped shipping orders even during intermittent carrier downtime.",
    tags: ["ZaloPay Webhook", "GHN API", "Viettel Post API", "Idempotency", "Retry Pattern"]
  }
];
