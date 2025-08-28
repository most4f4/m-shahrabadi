import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "../../../../data/projects";
import ProjectDetail from "../../../../components/sections/ProjectDetail";

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Mostafa Hasanalipourshahrabadi`,
    description: project.description,
    keywords: project.technologies.join(", "),
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
