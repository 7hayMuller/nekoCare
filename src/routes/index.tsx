import LoginLayout from "@/layouts/LoginLayout";
import ProtectedRoute from "@/pages/protectedRoute";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const AppLayout = lazy(() => import("@/layouts/AppLayout"));
const Appointments = lazy(() => import("@/pages/appointments_create"));
const HomePage = lazy(() => import("@/pages/appointments"));

const Login = lazy(() => import("@/pages/login"));

const routes = {
  admin: [] as RouteObject[],
  patient: [] as RouteObject[],
  login: [] as RouteObject[],
};

routes.login = [
  {
    // errorElement: <LoginError />,
    element: <LoginLayout />,
    children: [
      { path: "*", element: <Login /> },
      // { path: "forbidden", element: <LoginForbidden /> },
      // { path: "forgot", element: <LoginForgot /> },
      // { path: "reset/:hash", element: <LoginReset /> },
    ],
  },
];

routes.patient = [
  {
    path: "/:patient",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "appointments", element: <HomePage /> },
          { path: "appointments/create", element: <Appointments /> },
        ],
      },
    ],
  },
];

export default routes;
