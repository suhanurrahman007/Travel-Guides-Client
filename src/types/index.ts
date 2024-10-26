import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface TPost {
  _id: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  city: string;
  dateFound: string;
  status: string;
  isReported: boolean;
  reportCount: number;
  category: TCategory;
  user: TUser;
  questions: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TCategory {
  _id: string;
  name: string;
  postCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status: string;
  mobileNumber: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface TInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}

export interface TSearchResult {
  title: string;
  description: string;
  thumbnail: string;
  id: string;
}
// export interface TClaimRequest {
//   item: string;
//   description: string;
//   answers: string[];
// }

export interface IAnswer {
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export type TClaimRequest = {
  _id: string;
  item?: TPost;
  claimant: string | TClaimant;
  status: string;
  description: string;
  answers: IAnswer[];
  feedback: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface TClaimant {
  _id: string;
  name: string;
  role: "USER" | "ADMIN";
  email: string;
  status: "ACTIVE" | "INACTIVE";
  mobileNumber: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profilePhoto: string;
}

// export interface TReceivedClaimRequest extends TPost {
//   claimRequests: TClaimRequest[];
// }

export interface TFeedbackStatus {
  feedback: string;
  status: string;
}

export interface TSearchResult {
  title: string;
  description: string;
  thumbnail: string;
  id: string;
}
