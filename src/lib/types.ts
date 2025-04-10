
export type UserRole = "admin" | "user";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  createdAt: Date;
  createdBy: string;
}

export interface Subcategory {
  id: string;
  categoryId: string;
  name: string;
  createdAt: Date;
  createdBy: string;
}

export interface Question {
  id: string;
  subcategoryId: string;
  text: string;
  options: string[];
  correctAnswer: string;
  createdAt: Date;
  createdBy: string;
}

export interface QuizAccess {
  id: string;
  userId: string;
  subcategoryId: string;
  grantedBy: string;
  grantedAt: Date;
}

export interface QuizAttempt {
  id: string;
  userId: string;
  subcategoryId: string;
  score: number;
  totalQuestions: number;
  date: Date;
  completionTime: number; // in seconds
}
