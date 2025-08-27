import { Metadata } from "next";
import AboutSection from "../../../components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About Me - Mostafa Shahrabadi",
  description:
    "Learn about my journey from engineering to software development, my passion for problem-solving, and the experiences that shaped me as a developer.",
  keywords:
    "about, software developer, computer engineer, career transition, University of Birmingham, Seneca College, Questrade",
  openGraph: {
    title: "About Me - Mostafa Hasanalipourshahrabadi",
    description:
      "Learn about my journey from engineering to software development, my passion for problem-solving, and the experiences that shaped me as a developer.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
    </div>
  );
}
