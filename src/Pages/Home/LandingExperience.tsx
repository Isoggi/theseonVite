import * as React from "react";
import { ExperienceSection } from "../../Components";
import { ExperiencesJson } from "../../assets/Data";
import { IExperience } from "../../Interfaces";

export default function LandingExperience(): React.JSX.Element {
  const data = ExperiencesJson as IExperience[];
  return <ExperienceSection data={data} isExpandable={false} />;
}
