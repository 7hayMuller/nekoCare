import BackgroundShape from "@/components/BackgroundShape";
import NavBar from "@/components/NavBar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <BackgroundShape />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default AppLayout;
