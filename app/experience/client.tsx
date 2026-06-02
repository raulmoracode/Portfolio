"use client";

import PageBase from "@/components/custom/PageBase";
import { Info } from "@/const/page/info";
import ExperienceCard from "@/components/custom/cards/ExperienceCard";
import { experiences } from "@/const/page/experiences";
import ComingSoon from "@/components/custom/ComingSoon";

export default function ExperienceClient() {
  return (
    <PageBase
      title={Info.Experience.title}
      description={Info.Experience.description}
      showThemeToggle={true}
    >
      {experiences.length === 0 ? (
        <ComingSoon />
      ) : (
        <div className="space-y-4">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company}
              role={experience.role}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              location={experience.location}
              description={experience.description}
              highlights={experience.highlights}
              tags={experience.tags}
              companyUrl={experience.companyUrl}
              current={experience.current}
            />
          ))}
        </div>
      )}
    </PageBase>
  );
}
