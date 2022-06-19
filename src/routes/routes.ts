import Home from "../pages/Home";
import Login from "../pages/Login";
import Proposal from "../pages/Proposal";

export enum AppRoutes {
  Login = "/",
  Home = "/",
  Proposal = "/proposal/:id",
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
