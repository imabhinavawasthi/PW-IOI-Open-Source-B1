export type Category =
  | "All"
  | "DSA"
  | "System Design"
  | "Operating Systems"
  | "DBMS & SQL"
  | "Computer Networks"
  | "OOPs";

export interface NoteItem {
  id: string;
  title: string;
  category: Category;
  tag: string;
  author: string;
  authorRole: string;
  rating: number;
  reviewsCount: number;
  pages: number;
  formats: string[];
  price: number;
  originalPrice: number;
  highlights: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  college: string;
  company: string;
  role: string;
  avatarText: string;
  quote: string;
  rating: number;
  purchasedNote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
