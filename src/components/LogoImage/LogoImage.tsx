import { Grid } from "@mui/material";
import Logo from "../../assets/rent-tools.png";
import React from "react";

interface ILogoHeight {
  xs: number;
  sm: number;
}
interface ILogoImage {
  height?: number;
  logoHeight: ILogoHeight;
  logoHeightXS?: number;
}

const LogoImage: React.FC<ILogoImage> = ({ height, logoHeight }) => {
  const { xs, sm } = logoHeight;

  return (
    <Grid
      component="svg"
      sx={{
        backgroundImage: `url(${Logo})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        width: { xs: xs , sm: sm },
        height: height || 80,
      }}
    />
  );
};

export default LogoImage;
