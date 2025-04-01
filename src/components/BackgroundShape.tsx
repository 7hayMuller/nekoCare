import { Box } from "@mui/material";

const BackgroundShape = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "-200px",
        right: "-100px",
        width: "1000px",
        height: "800px",
        zIndex: -1,
        backgroundImage: `url('/assets/nekoOrganicForm.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "top right",
        pointerEvents: "none",
      }}
    />
  );
};

export default BackgroundShape;
