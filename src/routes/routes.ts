import MintTokens from "../components/MintToken/MintToken";
import Home from "../pages/Home";

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
    element: MintTokens,
    path: AppRoutes.Proposal,
  },
];
