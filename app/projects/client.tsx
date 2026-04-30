"use client";

import PageBase from "@/components/custom/Pagebase";
import { MainLinks } from "@/const/config/pages";
import ProjectCard from "@/components/custom/cards/ProjectCard";
import { staticProjects } from "@/const/page/projects";

export default function ProjectsClient() {
  return (
    <PageBase
      title={MainLinks.Projects.title}
      description={MainLinks.Projects.description}
      showThemeToggle={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {staticProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            demoUrl={project.demoUrl}
            repoUrl={project.repoUrl}
            status={project.status}
          />
        ))}
      </div>
    </PageBase>
  );
}
