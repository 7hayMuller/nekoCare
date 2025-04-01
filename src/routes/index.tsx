
import AppLayout from '@/layouts/AppLayout';
import HomePage from '@/pages/homePage';
// import BlogPage from '@/pages/BlogPage';
// import BookingPage from '@/pages/BookingPage';
// import NotFoundPage from '@/pages/NotFoundPage';
// import OnlineConsultPage from '@/pages/OnlineConsultPage';
// import ResultsPage from '@/pages/ResultsPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
    //   { path: 'agendamento', element: <BookingPage /> },
    //   { path: 'consulta-online', element: <OnlineConsultPage /> },
    //   { path: 'blog', element: <BlogPage /> },
    //   { path: 'exames', element: <ResultsPage /> },
    //   { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
