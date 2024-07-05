import { lazy } from "react";

export const Landing = lazy(() => import("./landing/Landing"));
export const Home = lazy(() => import("./home/Home"));
export const Updates = lazy(() => import("./updates/Updates"));
export const Licenses = lazy(() => import("./licenses/Licenses"));
export const Contact = lazy(() => import("./contact/Contact"));