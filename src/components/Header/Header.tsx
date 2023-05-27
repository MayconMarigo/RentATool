/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import LogoImage from "../LogoImage/LogoImage";
import { COLORS } from "../../theme/Theme";
import React, { ReactElement } from "react";

interface IHeader {
  renderImage?: boolean;
  renderContent?: boolean;
  children?: ReactElement;
  height?: number;
}

const Header: React.FC<IHeader> = ({
  renderImage,
  renderContent,
  children,
  height,
}) => {
  return (
    <Grid
      component="header"
      id="header"
      container
      sx={{ backgroundColor: COLORS.main, height: height }}
      p={2}
      px={4}
      alignItems="center"
      justifyContent="space-between"
    >
      {renderImage && <LogoImage logoHeight={{ xs: 150, sm: 200 }} />}

      {renderContent && children}
    </Grid>
  );
};

export default Header;
