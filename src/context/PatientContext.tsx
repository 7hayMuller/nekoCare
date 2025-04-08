import { createContext, useContext, useEffect, useState } from "react";

type PatientContextType = {
  token: string | null;
  setToken: (value: string) => void;
  profile: "patient" | "admin" | null;
  setProfile: (value: "patient" | "admin") => void;
};

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export const PatientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [profile, setProfile] = useState<"patient" | "admin" | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedProfile = localStorage.getItem("profile") as
      | "admin"
      | "patient"
      | null;

    if (storedToken) setToken(storedToken);
    if (storedProfile) setProfile(storedProfile);
  }, []);

  return (
    <PatientContext.Provider
      value={{
        token,
        setToken,
        profile,
        setProfile,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = () => {
  const context = useContext(PatientContext);

  if (!context) {
    throw new Error("usePatientContext must be used within an PatientProvider");
  }
  return context;
};
