import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Favorite = lazy(() => import("../pages/Favorite"));
const Setting = lazy(() => import("../pages/Setting"));
const Storage = lazy(() => import("../pages/Storage"));
const Community = lazy(() => import("../pages/Community"));
const Chats = lazy(() => import("../pages/Chats"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Folder = lazy(() => import("../pages/Folder"));
/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  // {
  //   path: "/favorite",
  //   component: Favorite,
  // },
  {
    path: "/setting",
    component: Setting,
  },
  {
    path: "/storage",
    component: Storage,
  },
  {
    path: "/community",
    component: Community,
  },
  {
    path: "/chat",
    component: Chats,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
  {
    path: "/folder/:foldername/:id",
    component: Folder,
  },
];

export default routes;