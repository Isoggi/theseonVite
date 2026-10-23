import React from "react";
import { IPageStructure } from "../Interfaces";

const AllPageModules = import.meta.glob("../Pages/**/*.tsx", { eager: true });
const NormalizedRegistry: Record<string, React.ComponentType<object>> = {};

Object.keys(AllPageModules).forEach((path) => {
  // Normalize path segments by splitting them
  // e.g., "../Pages/Home/LandingHeader.tsx" -> ["..", "Pages", "Home", "LandingHeader.tsx"]
  const parts = path.split("/");

  const folder = parts[parts.length - 2]; // e.g., "Home"
  const fileName = parts[parts.length - 1]?.replace(".tsx", ""); // e.g., "HeroSection"

  if (folder && fileName) {
    // Save to map using entirely lowercase strings
    const lookupKey = `${folder.toLowerCase()}/${fileName.toLowerCase()}`;
    const module =
      (AllPageModules[path] as {
        default: React.ComponentType<object>;
      }) || undefined;

    if (module?.default) {
      NormalizedRegistry[lookupKey] = module.default;
    }
  }
});

export function getPageModules(
  folderName: string,
  pageStructure: IPageStructure[],
): React.ReactElement[] {
  const ActiveElements: React.ReactElement[] = [];

  pageStructure.forEach((element) => {
    if (!element.isactive) return;

    // Normalize incoming arguments to lowercase
    const cleanFolder = folderName.toLowerCase();
    const cleanModule = element.component?.toLowerCase();
    const lookupKey = `${cleanFolder}/${cleanModule}`;

    const Element = NormalizedRegistry[lookupKey];
    if (!Element) {
      console.warn(
        `Dynamic Layout Error: Could not find component matching "${element.component}" inside "src/Pages/${folderName}/". Check spelling.`,
      );
      return;
    }

    ActiveElements.push(React.createElement(Element, { key: lookupKey }));
  });

  return ActiveElements;
}
