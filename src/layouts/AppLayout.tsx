import BackgroundShape from "@/components/BackgroundShape";
import NavBar from "@/components/NavBar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <BackgroundShape top="-200px" right="-100px" />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      <BackgroundShape bottom="-400px" left="-500px" />
    </>
  );
};

export default AppLayout;
