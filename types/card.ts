import type { ReactNode } from "react";

export type ArticleCardProps = {
  title: string;
  description: string;
  date: string;
  url: string;
  author?: string;
  readingTime?: string;
  tags?: readonly string[];
};

export type EventCardProps = {
  title: string;
  description: string;
  date: string;
  meetupUrl?: string;
  lumaUrl?: string;
  eventbriteUrl?: string;
  status?: "Upcoming" | "Finished";
};

export type ProjectCardProps = {
  title: string;
  description: string;
  tags?: readonly string[];
  demoUrl?: string;
  repoUrl?: string;
  status?: "Finished" | "In Progress" | "Archived";
};

export type CareerCardProps = {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description: string;
  highlights?: string[];
  tags?: readonly string[];
  companyUrl?: string;
  current?: boolean;
};

export type CardBaseProps = {
  cardHeader?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardHeaderStyle?: string;
};

export type PageBaseProps = {
  title: string;
  description: string;
  children?: ReactNode;
  showThemeToggle?: boolean;
  isEmpty?: boolean;
};
