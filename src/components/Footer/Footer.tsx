/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import { COLORS } from "../../theme/Theme";
import React, { ReactElement } from "react";

interface IFooter {
  renderContent?: boolean;
  children?: ReactElement;
  rest?: object
}

const Footer: React.FC<IFooter> = ({ renderContent, children, rest }) => {
  return (
    <Grid
      container
      component="footer"
      id="footer"
      sx={{
        backgroundColor: COLORS.footer,
        height: 50,
        ...rest
      }}
    >
      {renderContent && children}
    </Grid>
  );
};

export default Footer;
