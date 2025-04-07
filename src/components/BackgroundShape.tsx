import { Box } from "@mui/material";

type BackgroundShapeProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};

const BackgroundShape: React.FC<BackgroundShapeProps> = ({
  top,
  left,
  right,
  bottom,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: top,
        right: right,
        left: left,
        bottom: bottom,
        width: "1000px",
        height: "800px",
        zIndex: -1,
        backgroundImage: `url('/assets/nekoOrganicForm.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "top right",
        pointerEvents: "none",
        opacity: "0.5",
      }}
    />
  );
};

export default BackgroundShape;
