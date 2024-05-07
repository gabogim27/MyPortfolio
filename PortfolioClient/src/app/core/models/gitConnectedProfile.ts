import { Basics } from "./basics";
import { Education } from "./education";
import { Language } from "./language";
import { Project } from "./project";
import { Skill } from "./skill";
import { Work } from "./work";

export interface GitConnectedProfile {
  basics:       Basics;
  skills:       Skill[];
  projects:     Project[];
  work:         Work[];
  // publications: Publication[];
  education:    Education[];
  languages:    Language[];
}
