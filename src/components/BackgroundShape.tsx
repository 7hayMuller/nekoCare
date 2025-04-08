import { Box } from "@mui/material";

type BackgroundShapeProps = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  mode?: string;
  zIndex?: number;
};

const BackgroundShape: React.FC<BackgroundShapeProps> = ({
  zIndex,
  top,
  left,
  right,
  bottom,
  mode,
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
        zIndex: zIndex ?? -1,
        backgroundImage: `url('/assets/neko${
          mode === "white" ? "White" : "Blue"
        }OrganicForm.svg')`,
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
