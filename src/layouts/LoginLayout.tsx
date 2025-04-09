import { Box, Grid, Typography } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          marginTop: -5,
        }}
      >
        <Box
          component="img"
          src="/assets/heroImageLogin.png"
          alt="Hero image"
          sx={{
            width: 500,
            height: 700,
            position: "relative",
            marginRight: "-100px",
            zIndex: 200,
          }}
        />

        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "background.paper",
            borderRadius: 5,
            height: 500,
            width: 600,
            zIndex: 3,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            padding: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h3" fontWeight={700} color="primary">
              Neko
            </Typography>
            <Typography variant="h3" fontWeight={700} color="secondary">
              Care
            </Typography>
          </Box>

          <Outlet />
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginLayout;
