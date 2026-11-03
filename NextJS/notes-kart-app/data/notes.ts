import { FAQItem, NoteItem, TestimonialItem } from "@/types/note";

export const CATEGORIES = [
  "All",
  "DSA",
  "System Design",
  "Operating Systems",
  "DBMS & SQL",
  "Computer Networks",
  "OOPs",
] as const;

export const NOTES_DATA: NoteItem[] = [
  {
    id: "dsa-mastery",
    title: "DSA Pattern Bible: Top 85 LeetCode Patterns & Templates",
    category: "DSA",
    tag: "Bestseller",
    author: "Rahul Verma",
    authorRole: "Ex-Google SDE II",
    rating: 4.95,
    reviewsCount: 1420,
    pages: 184,
    formats: ["PDF", "Notion", "Anki Decks"],
    price: 349,
    originalPrice: 899,
    highlights: [
      "Two Pointers, Sliding Window, DP & Graphs visualized",
      "Ready-to-use C++, Java & Python code templates",
      "Time & space complexity decision trees",
    ],
    popular: true,
  },
  {
    id: "system-design-primer",
    title: "System Design for SDE-1 & SDE-2: HLD + LLD Crash Course",
    category: "System Design",
    tag: "Updated 2026",
    author: "Sneha Mukherjee",
    authorRole: "Senior Engineer at Uber",
    rating: 4.92,
    reviewsCount: 980,
    pages: 160,
    formats: ["PDF", "Figma Architecture Kits"],
    price: 399,
    originalPrice: 999,
    highlights: [
      "12 Real Case Studies: TinyURL, Uber, Netflix, WhatsApp",
      "Solid Principles, Design Patterns & UML breakdowns",
      "Trade-off frameworks: CAP theorem, caching, sharding",
    ],
    popular: true,
  },
  {
    id: "os-internals",
    title: "Operating Systems Deep-Dive: Concurrency, Memory & Linux",
    category: "Operating Systems",
    tag: "High Yield",
    author: "Arjun Nair",
    authorRole: "Systems Engineer at Microsoft",
    rating: 4.88,
    reviewsCount: 750,
    pages: 125,
    formats: ["PDF", "Print-Ready Cheatsheet"],
    price: 249,
    originalPrice: 599,
    highlights: [
      "Process vs Thread lifecycle, IPC & synchronization",
      "Deadlock resolution, Paging, TLB & Virtual Memory",
      "Top 50 tricky viva & technical round questions",
    ],
  },
  {
    id: "dbms-sql-handbook",
    title: "DBMS & SQL Interview Blueprint: Transactions, Indexing & Queries",
    category: "DBMS & SQL",
    tag: "Must Have",
    author: "Pooja Hegde",
    authorRole: "Database Specialist at Oracle",
    rating: 4.9,
    reviewsCount: 890,
    pages: 135,
    formats: ["PDF", "SQL Practice Queries Repo"],
    price: 279,
    originalPrice: 699,
    highlights: [
      "ACID properties, 1NF to BCNF normalization with proofs",
      "B+ Trees, Indexing internals & query optimization",
      "40+ complex window function & JOIN interview queries",
    ],
  },
  {
    id: "cn-fast-track",
    title: "Computer Networks Fast-Track: Protocols, Security & TCP/IP",
    category: "Computer Networks",
    tag: "Last-Minute Prep",
    author: "Karthik Iyer",
    authorRole: "Network Engineer at Cisco",
    rating: 4.85,
    reviewsCount: 620,
    pages: 110,
    formats: ["PDF", "Summary Mindmaps"],
    price: 229,
    originalPrice: 549,
    highlights: [
      "OSI vs TCP/IP layer-by-layer animated breakdown",
      "TCP 3-way handshake, Flow/Congestion control formulas",
      "HTTP/1.1 vs HTTP/2 vs HTTP/3, WebSockets, DNS & SSL/TLS",
    ],
  },
  {
    id: "oops-design-principles",
    title: "OOPs & Design Patterns in Action: C++, Java & Python",
    category: "OOPs",
    tag: "Core CS",
    author: "Ananya Roy",
    authorRole: "Staff Software Engineer",
    rating: 4.89,
    reviewsCount: 540,
    pages: 95,
    formats: ["PDF", "Interactive Code Snippets"],
    price: 199,
    originalPrice: 499,
    highlights: [
      "Polymorphism, Inheritance vs Composition pitfalls",
      "Creational, Structural & Behavioral patterns with code",
      "Real interview mock question-answer bank",
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Aditya Sharma",
    college: "IIT BHU '25",
    company: "Microsoft",
    role: "Software Engineer",
    avatarText: "AS",
    quote:
      "The DSA Pattern Bible was a game changer for my Microsoft on-site round. The templates and pattern breakdowns saved me 3 weeks of random grinding.",
    rating: 5,
    purchasedNote: "DSA Pattern Bible",
  },
  {
    id: "test-2",
    name: "Priya Sundaram",
    college: "NIT Trichy '25",
    company: "Amazon",
    role: "SDE-1",
    avatarText: "PS",
    quote:
      "I was terrified of the core CS rounds. NotesKart's OS and DBMS handbooks allowed me to revise everything in just 36 hours before my Amazon interview.",
    rating: 5,
    purchasedNote: "Core CS Fundamentals Bundle",
  },
  {
    id: "test-3",
    name: "Tanmay Bansal",
    college: "DTU Delhi '24",
    company: "Atlassian",
    role: "Associate SDE",
    avatarText: "TB",
    quote:
      "The System Design crash course with high-res architecture diagrams helped me sail through the LLD round. Totally worth every single rupee!",
    rating: 5,
    purchasedNote: "System Design for SDE-1",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "How do I receive the notes after purchase?",
    answer:
      "Instant access! As soon as your purchase is completed, you receive a direct high-speed download link to download high-resolution PDFs, as well as an invite link to duplicate the Notion workspaces.",
  },
  {
    question: "Are these notes suitable for both on-campus and off-campus placements?",
    answer:
      "Yes. The notes are curated targeting tier-1 product companies (FAANG, Uber, Atlassian, Oracle) as well as campus recruitment drives (TCS Ninja/Digital, Cognizant, Infosys SP/DSI, startups).",
  },
  {
    question: "Do the notes include code examples in multiple languages?",
    answer:
      "All DSA and OOPs notes include clean, idiomatic implementations in C++, Java, and Python with detailed time & space complexity analysis.",
  },
  {
    question: "Will I get future updates to the notes?",
    answer:
      "Yes! You receive lifetime free updates. Whenever interview patterns evolve or new company-specific questions are added, you get updated versions in your library automatically.",
  },
  {
    question: "Can I read the notes offline or print them?",
    answer:
      "Absolutely. All PDFs are DRM-free and formatted with high-contrast, printer-friendly typography so you can annotate them on iPad/tablet or print hard copies.",
  },
];

export const PLATFORM_STATS = [
  { label: "Notes Downloaded", value: "65,000+" },
  { label: "Active CSE Students", value: "28,000+" },
  { label: "Average Rating", value: "4.92 / 5" },
  { label: "Campus Offers Secured", value: "4,500+" },
];
