import Home from "../pages/Home";
import Proposal from "../pages/Proposal";

export enum AppRoutes {
  Home = "/",
  Proposal = "/proposal",
}

export const routes = [
  {
    index: true,
    element: Home,
    path: AppRoutes.Home,
  },
  {
    index: true,
    element: Proposal,
    path: AppRoutes.Proposal,
  },
];
