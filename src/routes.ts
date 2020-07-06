import { Home } from "./scenes/Home";
import { Contact } from "./scenes/Contact";
import Admin from "./scenes/Admin";
import { Projects } from "./scenes/Projects";

export interface MatchParams {
  tab: string;
}

//Please notify that the order of routes is the order of tabs
export const routes = [
  {
    name: "home",
    component: Home,
  },
  {
    name: "projects",
    component: Projects,
  },
  {
    name: "contact",
    component: Contact,
  },
  {
    name: "admin",
    component: Admin,
  },
];
