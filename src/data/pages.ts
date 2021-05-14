import { Home, Login } from "@pages";

const pages: Array<PageInfo> = [
  {
    name: "Home",
    title: "꽃과 케이크",
    path: "/",
    component: Home,
  },
  {
    name: "Login",
    path: "/login",
    title: "로그인",
    component: Login,
  },
];

export default pages;
