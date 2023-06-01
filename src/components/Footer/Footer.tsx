/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import { COLORS } from "../../theme/Theme";
import React, { ReactElement } from "react";

interface IFooter {
  renderContent?: boolean;
  children?: ReactElement;
}

const Footer: React.FC<IFooter> = ({ renderContent, children }) => {
  return (
    <Grid
      container
      component="footer"
      id="footer"
      sx={{
        backgroundColor: COLORS.footer,
        height: 50,
      }}
    >
      {renderContent && children}
    </Grid>
  );
};

export default Footer;
