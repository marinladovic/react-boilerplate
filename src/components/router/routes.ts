import { Home } from "../../pages/home/Home";
import { SecondPage } from "../../pages/second-page/SecondPage";

export const routes = [
  {
    path: "/",
    props: false,
    component: Home,
  },
  {
    path: "/second",
    props: false,
    component: SecondPage,
  },
];
