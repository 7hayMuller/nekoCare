import BackgroundShape from "@/components/BackgroundShape";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <BackgroundShape top="-200px" right="-100px" />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
      <BackgroundShape bottom="-400px" left="-500px" />
    </Box>
  );
};

export default LoginLayout;
