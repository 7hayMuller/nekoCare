import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import LoginLayout from "@/layouts/LoginLayout";
import AppLayout from "@/layouts/AppLayout";

//Appointments ----------------------------------------------------------------------------------
const AppointmentsCreate = lazy(() => import("@/pages/appointments_create"));
const Appointments = lazy(() => import("@/pages/appointments"));

//Exams------------------------------------------------------------------------------------------
const ExamsCreate = lazy(() => import("@/pages/exams_create"));
const Exams = lazy(() => import("@/pages/exams"));

//Login------------------------------------------------------------------------------------------
const Code = lazy(() => import("@/pages/code"));
const Login = lazy(() => import("@/pages/login"));
import ProtectedRoute from "@/pages/protectedRoute";

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
      { path: "/code", element: <Code /> },
      // { path: "forbidden", element: <LoginForbidden /> },
      // { path: "forgot", element: <LoginForgot /> },
      // { path: "reset/:hash", element: <LoginReset /> },
    ],
  },
];

routes.patient = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: "appointments", element: <Appointments /> },
          { path: "appointments/create", element: <AppointmentsCreate /> },
          { path: "exams/create", element: <ExamsCreate /> },
          { path: "exams", element: <Exams /> },
        ],
      },
    ],
  },
];

export default routes;
