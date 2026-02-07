import { Metadata } from "next";
import { NextPageProps } from "@/lib/types";
import { getUserInformation } from "@/lib/mdx";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Jason Nguyen - software engineer, technical writer, and digital creator.',
};

export default function AboutPage(props: NextPageProps) {
  const userInfo = getUserInformation();

  return (
    <AboutClient userInfo={userInfo} />
  );
} 