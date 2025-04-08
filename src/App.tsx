import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { usePatientContext } from "./context/PatientContext";

const App: React.FC = () => {
  const { token, profile } = usePatientContext();

  if (!token || !profile) {
    return (
      <Suspense fallback={<>...</>}>
        <RouterProvider router={createBrowserRouter(routes.login)} />
      </Suspense>
    );
  }

  const selectedRoutes = profile === "admin" ? routes.admin : routes.patient;

  return (
    <Suspense fallback={<>...</>}>
      <RouterProvider router={createBrowserRouter(selectedRoutes)} />
    </Suspense>
  );
};

export default App;
