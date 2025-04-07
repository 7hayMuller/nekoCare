import AppLayout from "@/layouts/AppLayout";
import Appointments from "@/pages/create_appointment";
import HomePage from "@/pages/appointment";
// import BlogPage from '@/pages/BlogPage';
// import BookingPage from '@/pages/BookingPage';
// import NotFoundPage from '@/pages/NotFoundPage';
// import OnlineConsultPage from '@/pages/OnlineConsultPage';
// import ResultsPage from '@/pages/ResultsPage';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "appointments", element: <HomePage /> },
      { path: "appointments/create", element: <Appointments /> },
      //   { path: 'consulta-online', element: <OnlineConsultPage /> },
      //   { path: 'blog', element: <BlogPage /> },
      //   { path: 'exames', element: <ResultsPage /> },
      //   { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
