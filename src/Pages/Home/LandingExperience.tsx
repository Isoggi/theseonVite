import * as React from "react";
import { ExperienceSection } from "../../Components";
import experienceData from "../../assets/Data/Experience.json";
import { IExperience } from "../../Interfaces";

export function LandingExperience(): React.JSX.Element {
  const data = experienceData as IExperience[];
  return <ExperienceSection experienceData={data} />;
}
