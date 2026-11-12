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
  iconName: "server" | "database" | "integrations" | "terminal";
  color: string;
  skills: string[];
}

export interface HighlightMetric {
  value: string;
  label: string;
  detail: string;
  accentColor?: "blue" | "indigo" | "emerald" | "amber";
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
  title: "Software Engineer",
  subtitle: "Backend Developer • NestJS / TypeScript • .NET 8",
  about:
    "Backend Engineer with hands-on experience designing, building, and optimizing production-grade RESTful APIs using NestJS, TypeScript, Node.js, and .NET. Proven track record in delivering multi-platform e-commerce, digital ordering, and logistics systems featuring complex database query optimization, third-party payment and shipping integrations, and Role-Based Access Control (RBAC). Strong focus on Clean Architecture, high-concurrency data consistency, secure coding, and seamless collaboration with frontend and mobile teams.",
  tagline:
    "Building scalable backend systems with a focus on Clean Architecture, data consistency, and high performance.",
  email: "quangthong211101@gmail.com",
  phone: "0367262415",
  location: "Da Nang, Vietnam",
  github: "https://github.com/thong21112001",
  linkedin: "https://www.linkedin.com/in/quang-thong-tran-4885b3238",
  portfolioUrl: "https://portfolio-beige-psi-27.vercel.app",
  dob: "21/11/2001",
  avatarPath: "/Avatar.png",
  resumePath: "/TranQuangThong_CV_EN.pdf"
};

export const HIGHLIGHT_METRICS: HighlightMetric[] = [
  {
    value: "40%",
    label: "Code Duplication Reduced",
    detail: "DRY & Clean Architecture Refactoring",
    accentColor: "blue"
  },
  {
    value: "50+",
    label: "Active F&B Businesses",
    detail: "iMenu Smart Ordering SaaS Nationwide",
    accentColor: "indigo"
  },
  {
    value: "4+",
    label: "E-Commerce Ecosystems",
    detail: "HappyCo, Vmix, Vinabill, Bep Nha Thu",
    accentColor: "emerald"
  },
  {
    value: "3.64",
    label: "Software Engineering GPA",
    detail: "Duy Tan University (Graduated / 4.0)",
    accentColor: "amber"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Architecture",
    iconName: "server",
    color: "blue",
    skills: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "ASP.NET Core (.NET 8)",
      "C#",
      "Clean Architecture",
      "CQRS",
      "Repository & Unit of Work",
      "RESTful APIs"
    ]
  },
  {
    title: "Databases & Caching",
    iconName: "database",
    color: "indigo",
    skills: [
      "MongoDB (Mongoose, Aggregation Pipelines)",
      "SQL Server",
      "MySQL",
      "Entity Framework Core",
      "LINQ",
      "Redis"
    ]
  },
  {
    title: "Third-Party Integrations",
    iconName: "integrations",
    color: "emerald",
    skills: [
      "ZaloPay Payment Gateway",
      "GHN API",
      "Viettel Post API",
      "AWS S3",
      "Firebase Authentication (OTP SMS)",
      "Firebase Storage"
    ]
  },
  {
    title: "DevOps, Security & Tools",
    iconName: "terminal",
    color: "amber",
    skills: [
      "Docker",
      "PM2",
      "IIS",
      "Git",
      "GitLab",
      "GitHub",
      "Swagger/OpenAPI",
      "JWT Authentication",
      "RBAC",
      "Validation",
      "Logging & Retry Mechanisms"
    ]
  }
];

export const CORE_KEY_SKILLS = [
  "NestJS",
  "TypeScript",
  "Node.js",
  "ASP.NET Core (.NET 8)",
  "C#",
  "MongoDB",
  "Redis",
  "SQL Server",
  "Clean Architecture",
  "CQRS"
];

export const CORE_ENGINEERING_FOCUS = [
  {
    title: "Clean Architecture & CQRS",
    description: "Layered domain separation, repository patterns, and decoupled command/query pipelines."
  },
  {
    title: "High-Concurrency & Caching",
    description: "Redis distributed locking, stock consistency, and MongoDB aggregation tuning."
  },
  {
    title: "Payment & Logistics Integrations",
    description: "ZaloPay idempotent webhooks, automated retries for GHN & Viettel Post carrier APIs."
  },
  {
    title: "API Contract Standardization",
    description: "Strict class-validator DTOs, centralized error filters, and Swagger OpenAPI contracts."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-api",
    title: "E-Commerce Ecosystem & Backend System",
    subtitle: "Backend Developer (NestJS / TypeScript) • HIFIVEPLUS",
    description:
      "Designed and developed modular production RESTful APIs using NestJS, TypeScript, MongoDB, Redis, and AWS S3 serving web and mobile ecommerce platforms (HappyCo, Vmix, Vinabill, Bep Nha Thu). Handled complete order lifecycles including shopping carts, instant buy-now flows, voucher validations, dynamic pricing, and carrier dispatch integrations.",
    techStack: [
      "NestJS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS S3",
      "ZaloPay",
      "GHN API",
      "Viettel Post API",
      "Swagger"
    ],
    architectureFlow: [
      "Client Web / Mobile",
      "NestJS REST API + RBAC & DTO Validation",
      "Redis Distributed Lock (Voucher / Stock)",
      "MongoDB Aggregation Pipelines",
      "ZaloPay Webhook & GHN / Viettel Post Retry"
    ],
    metrics: [
      "40% Code Duplication Reduction",
      "35% Faster Aggregation Lookups",
      "100% Payment Reconciliation Rate"
    ],
    challenges: [
      "E-Commerce Ecosystem (HappyCo, Vmix, Vinabill, Bep Nha Thu): Designed and developed modular production RESTful APIs using NestJS, TypeScript, MongoDB, Redis, and AWS S3 serving web and mobile ecommerce applications.",
      "Order Lifecycle & Pricing Engine: Engineered end-to-end order management covering cart workflows, instant buy-now flows, admin order creation, dynamic pricing, voucher validation logic, real-time inventory updates, and ZaloPay payment integration.",
      "Database & Query Optimization: Optimized complex multi-collection data lookups using MongoDB Aggregation Pipelines and Redis caching to significantly reduce API response times under high traffic.",
      "Resilient Logistics Integrations: Implemented comprehensive DTO validation, centralized error handling, structured logging, and automated retry mechanisms for third-party shipping carriers including GHN and Viettel Post.",
      "Architecture Refactoring: Refactored core backend services following DRY and Clean Architecture principles, reducing codebase duplication by 40% and standardizing Swagger API contracts for frontend/mobile teams."
    ],
    links: {
      demos: [
        { label: "Vmix Vietnam", url: "https://vmixvietnam.vn" },
        { label: "Kho Mộc", url: "https://khomoc.com" },
        { label: "Giấy in Vinabill", url: "https://vinapos.info" },
        { label: "Bếp nhà Thu", url: "https://bepthu-web.dev00.xyz" }
      ]
    }
  },
  {
    id: "imenu",
    title: "iMenu – Digital Menu & Smart Ordering SaaS",
    subtitle: "Backend Developer (.NET 8 / CQRS) • Khang Thi",
    description:
      "Delivered a full-featured smart ordering platform adopted by 50+ F&B businesses nationwide using .NET 8, CQRS, Clean Architecture, and SQL Server; integrated real-time table/order updates, sales reporting, Firebase OTP SMS authentication, and Firebase Storage image offloading.",
    techStack: [
      ".NET 8",
      "C#",
      "CQRS",
      "Clean Architecture",
      "SQL Server",
      "EF Core",
      "Firebase OTP SMS",
      "Firebase Storage",
      "IIS"
    ],
    architectureFlow: [
      "QR Smart Table Ordering",
      "Firebase OTP SMS Auth",
      ".NET 8 CQRS + Unit of Work",
      "Real-time Order & Table Sync",
      "SQL Server & Firebase Storage"
    ],
    metrics: [
      "50+ Active F&B Businesses",
      "Sub-second Table Order Sync",
      "Zero-downtime Order Processing"
    ],
    challenges: [
      "Delivered a full-featured smart ordering platform adopted by 50+ F&B businesses nationwide using .NET 8, CQRS, Clean Architecture, and SQL Server.",
      "Integrated real-time table/order updates and sales reporting for kitchen, staff, and restaurant administrators.",
      "Implemented secure Firebase OTP SMS authentication and offloaded media assets to Firebase Storage.",
      "Applied CQRS and Repository & Unit of Work patterns for transactional consistency and clear separation of concerns."
    ],
    links: {
      demos: [
        { label: "Menu Điện Tử", url: "https://menudientu.com" }
      ]
    }
  },
  {
    id: "gov-platform",
    title: "Provincial Digital Transformation Portals",
    subtitle: "eGovernment & High Concurrency • Khang Thi",
    description:
      "Built and deployed eGovernment modules for citizen registration, online form submission, document tracking, and admin dashboards for multiple provinces (Quang Tri, Quang Ngai, Dak Lak) aligned with Vietnam's National Digital Transformation roadmap.",
    techStack: [
      "ASP.NET Core",
      ".NET 8",
      "C#",
      "SQL Server",
      "ASP.NET Identity",
      "RBAC",
      "IIS"
    ],
    architectureFlow: [
      "e-Citizen Registration Portal",
      "ASP.NET Core Identity + Strict RBAC",
      "Multi-Stage Approval Workflow Engine",
      "Batch Processing & High-Concurrency Queue",
      "SQL Server & Excel Export"
    ],
    metrics: [
      "Thousands of Concurrent Users",
      "100% Audit Trail Compliance",
      "Automated Multi-Stage Approvals"
    ],
    challenges: [
      "Built and deployed eGovernment modules for citizen registration, online form submission, document tracking, and admin dashboards aligned with Vietnam's National Digital Transformation roadmap.",
      "High-Concurrency Optimization: Contributed to database performance tuning and batch processing for thousands of concurrent users handling mass form submissions and Excel data exports/imports.",
      "Enforced rigid Role-Based Access Control (RBAC) and data sanitization guidelines, shielding sensitive public operations."
    ],
    links: {
      demos: [
        { label: "CSDL Nông Nghiệp Quảng Trị", url: "https://csdlnn.quangtri.gov.vn" }
      ]
    }
  },
  {
    id: "logistics-scale",
    title: "Real-time Truck Scale & Logistics System",
    subtitle: "Logistics Automation & Hardware I/O • Khang Thi",
    description:
      "Engineered real-time truck scale management modules for logistics operations with strict role-based authorization (RBAC) and secure coding practices in an Agile environment.",
    techStack: [
      ".NET 8",
      "C#",
      "Clean Architecture",
      "SQL Server",
      "Serial Port / RS232",
      "EF Core",
      "RBAC",
      "IIS"
    ],
    architectureFlow: [
      "Truck Weighbridge Indicator Sensor",
      "Serial Port / RS232 Ingestion Service",
      ".NET 8 Clean Architecture & RBAC",
      "Automated Weight Verification & Anti-Tamper",
      "SQL Server & Weighbridge Ticket Dispatch"
    ],
    metrics: [
      "100% Weighing Data Accuracy",
      "<100ms Ticket Generation",
      "Continuous Offline-First Operation"
    ],
    challenges: [
      "Logistics Automation: Engineered real-time truck scale management modules for logistics operations with strict role-based authorization (RBAC) and secure coding practices in an Agile environment.",
      "Engineered reliable asynchronous RS232/Serial port protocol communication with industrial weighing indicators.",
      "Implemented weight verification logic and anti-tampering audit logs to eliminate weighing fraud and ensure data integrity.",
      "Applied Clean Architecture with SQL Server for offline-first resilience during connectivity drops."
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
    role: "Backend Developer (NestJS / TypeScript)",
    company: "HIFIVEPLUS",
    period: "11/2025 - 11/2026",
    description: [
      "E-Commerce Ecosystem (HappyCo, Vmix, Vinabill, Bep Nha Thu): Designed and developed modular production RESTful APIs using NestJS, TypeScript, MongoDB, Redis, and AWS S3 serving web and mobile ecommerce applications.",
      "Order Lifecycle & Pricing Engine: Engineered end-to-end order management covering cart workflows, instant buy-now flows, admin order creation, dynamic pricing, voucher validation logic, real-time inventory updates, and ZaloPay payment integration.",
      "Database & Query Optimization: Optimized complex multi-collection data lookups using MongoDB Aggregation Pipelines and Redis caching to significantly reduce API response times under high traffic.",
      "Resilient Logistics Integrations: Implemented comprehensive DTO validation, centralized error handling, structured logging, and automated retry mechanisms for third-party shipping carriers including GHN and Viettel Post.",
      "Architecture Refactoring: Refactored core backend services following DRY and Clean Architecture principles, reducing codebase duplication by 40% and standardizing Swagger API contracts for frontend/mobile teams."
    ],
    skills: [
      "NestJS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "AWS S3",
      "ZaloPay",
      "GHN API",
      "Viettel Post API",
      "Clean Architecture",
      "Swagger"
    ]
  },
  {
    id: "exp-khangthi",
    role: "Backend Developer (.NET / Web Systems)",
    company: "Khang Thi",
    period: "11/2024 - 11/2025",
    description: [
      "iMenu – Digital Menu & Smart Ordering (menudientu.com): Delivered a full-featured smart ordering platform adopted by 50+ F&B businesses nationwide using .NET 8, CQRS, Clean Architecture, and SQL Server; integrated real-time table/order updates, sales reporting, Firebase OTP SMS authentication, and Firebase Storage image offloading.",
      "Provincial Digital Transformation Portals (Quang Tri, Quang Ngai, Dak Lak): Built and deployed eGovernment modules for citizen registration, online form submission, document tracking, and admin dashboards aligned with Vietnam's National Digital Transformation roadmap.",
      "High-Concurrency Optimization: Contributed to database performance tuning and batch processing for thousands of concurrent users handling mass form submissions and Excel data exports/imports.",
      "Logistics Automation: Engineered real-time truck scale management modules for logistics operations with strict role-based authorization (RBAC) and secure coding practices in an Agile environment."
    ],
    skills: [
      ".NET 8",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "Clean Architecture",
      "CQRS",
      "Firebase OTP SMS",
      "Firebase Storage",
      "RBAC",
      "IIS"
    ]
  },
  {
    id: "exp-vinacen",
    role: "IT Intern (Web Development)",
    company: "Vinacen",
    period: "02/2023 - 05/2023",
    description: [
      "Built responsive website UI and supported feature development using HTML, CSS, Bootstrap, jQuery, and AJAX.",
      "Assisted with testing, documentation, and implementation of internal features."
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
    details:
      "Graduated with distinction. Focused on software architecture, clean patterns, database design, and object-oriented paradigms.",
    gpa: "3.64/4.0"
  }
];

export const INTERVIEW_HIGHLIGHTS: TechnicalHighlight[] = [
  {
    id: "concurrency-redis",
    title: "Concurrency & Race Condition Handling",
    subtitle: "High-Volume Voucher & Stock Management",
    category: "Distributed Locking & Redis",
    iconName: "lock",
    problem:
      "Concurrent requests during flash sales led to duplicate voucher redemptions and negative stock counts across multiple app instances.",
    solution:
      "Engineered Redis Distributed Locks with fine-grained resource keys and strict TTL auto-release. Paired with atomic MongoDB operations ($inc, $push) and transaction checks to ensure thread-safe balance operations.",
    impact:
      "Zero race condition incidents across flash sale events; sustained 1,000+ concurrent checkout requests safely without stock discrepancy.",
    tags: ["Redis", "Distributed Locks", "NestJS", "Concurrency", "MongoDB"]
  },
  {
    id: "db-optimization",
    title: "Database Query & Aggregation Tuning",
    subtitle: "High-Throughput Analytics & Multi-Collection Joins",
    category: "Performance & MongoDB Tuning",
    iconName: "database",
    problem:
      "Multi-collection dashboard reporting queries were scanning millions of unindexed documents, causing 2-3s request timeouts during peak business hours.",
    solution:
      "Refactored multi-stage MongoDB Aggregation Pipelines ($match early, optimized $lookup with projected subfields, compound indexing on tenant & timestamp). In .NET, applied EF Core AsNoTracking and optimized raw projection queries.",
    impact:
      "Reduced MongoDB query response times by 35%; lowered database CPU utilization by 28% under continuous peak traffic.",
    tags: ["MongoDB", "Aggregation Pipelines", "Indexing", "EF Core", "SQL Server"]
  },
  {
    id: "clean-arch-cqrs",
    title: "Clean Architecture, CQRS & Modular Design",
    subtitle: "40% Code Duplication Reduction",
    category: "Architecture & Scalability",
    iconName: "layers",
    problem:
      "Legacy codebase mixed business logic, database queries, and HTTP controllers, causing high coupling, regression bugs, and painful feature onboarding.",
    solution:
      "Segregated domain logic into distinct Application, Domain, and Infrastructure layers. Implemented CQRS to split read queries from transactional writes, combined with Repository & Unit of Work patterns and DRY utility modules.",
    impact:
      "Reduced codebase duplication by 40%; standardized Swagger OpenAPI contracts for seamless web and mobile frontend collaboration.",
    tags: ["Clean Architecture", "CQRS", "DRY", "Unit of Work", "NestJS", ".NET 8"]
  },
  {
    id: "third-party-integrations",
    title: "Resilient Logistics & Payment Integrations",
    subtitle: "Carrier APIs (GHN, Viettel Post) & ZaloPay Gateway",
    category: "Fault Tolerance & Integrations",
    iconName: "refresh-cw",
    problem:
      "Carrier API rate limits / downtime (GHN, Viettel Post) and delayed ZaloPay payment webhooks caused dropped orders and reconciliation mismatches.",
    solution:
      "Implemented comprehensive DTO validation, centralized error handling, structured logging, exponential backoff retry mechanisms for shipping carriers, and idempotent webhook processing with cryptographic verification.",
    impact:
      "100% payment reconciliation rate; zero dropped shipping carrier orders even during intermittent upstream downtime.",
    tags: ["ZaloPay", "GHN API", "Viettel Post API", "Idempotency", "Retry Policy"]
  }
];
