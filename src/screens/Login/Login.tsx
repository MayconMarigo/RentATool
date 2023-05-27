import { Grid } from "@mui/material";
import "./Login.css";
import LoginContainer from "../../components/LoginContainer/LoginContainer";
import LogoImage from "../../components/LogoImage/LogoImage";

function Login() {
  return (
    <Grid
      container
      direction="column"
      minHeight={"100vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={10}
    >
      <LogoImage logoHeight={{ xs: 200, sm: 300 }} />
      <LoginContainer />
    </Grid>
  );
}

export default Login;
