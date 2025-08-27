import { Metadata } from "next";
import { projects, categories } from "../../../data/projects";
import ProjectsGrid from "../../../components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects - Mostafa Hasanalipourshahrabadi",
  description:
    "Explore my portfolio of projects spanning web development, mobile apps, machine learning, cloud computing, desktop applications, and Unix programming.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="py-12">
        <ProjectsGrid
          projects={projects}
          title="All Projects"
          showFilters={true}
          showSearch={true}
          categories={categories}
          initialCategory="All"
        />
      </div>
    </div>
  );
}
