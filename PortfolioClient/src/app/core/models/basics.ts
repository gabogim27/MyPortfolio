import { Profile } from "./profile";

export interface Basics {
  name:              string;
  label:             string;
  image:             string;
  email:             string;
  phone:             string;
  url:               null;
  summary:           string;
  profiles:          Profile[];
  headline:          string;
  blog:              null;
  yearsOfExperience: null;
  username:          string;
  locationAsString:  string;
  region:            string;
  karma:             number;
  id:                string;
  followers:         number;
  following:         number;
  picture:           string;
  website:           null;
}
