import { Meta } from "@angular/platform-browser";
import { Basics } from "./basics";
import { Skill } from "./skill";


export interface Welcome {
  basics:       Basics;
  skills:       Skill[];
  projects:     any[];
  work:         any[];
  publications: any[];
  education:    any[];
  volunteer:    any[];
  awards:       any[];
  languages:    any[];
  interests:    any[];
  references:   any[];
  certificates: any[];
  meta:         Meta;
}
