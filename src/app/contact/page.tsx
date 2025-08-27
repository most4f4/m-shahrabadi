import { Metadata } from "next";
import ContactSection from "../../../components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Me - Mostafa Shahrabadi",
  description:
    "Get in touch with me for collaboration opportunities, project discussions, or any questions about my work in software development.",
  keywords:
    "contact, collaboration, software developer, projects, hire developer",
  openGraph: {
    title: "Contact Me - Mostafa Hasanalipourshahrabadi",
    description:
      "Get in touch with me for collaboration opportunities, project discussions, or any questions about my work in software development.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
