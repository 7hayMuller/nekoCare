// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { usePatientContext } from "@/context/PatientContext";

const ProtectedRoute = () => {
  const { token } = usePatientContext();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
