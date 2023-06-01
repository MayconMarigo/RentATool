import React from "react";
import { ITools } from "../../screens/Home/Home";
import { Box } from "@mui/material";

interface IToolContainer {
  content: ITools;
}

const ToolContainer: React.FC<IToolContainer> = ({ content }) => {

  const handleClick = () => {
    alert(content?.img)
  }
  return (
    <Box
      component="svg"
      onClick={handleClick}
      sx={{
        minHeight: 150,
        maxHeight: 200,
        minWidth: 150,
        maxWidth: 200,
        padding: 2,
        border: "2px solid #cccccc",
        borderRadius: 5,
        backgroundImage: `url(${content?.img})`,
        backgroundSize: "80% 80%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        "&:hover": {
          cursor: "pointer",
          opacity: 0.3,
        },
      }}
    />
  );
};

export default ToolContainer;
