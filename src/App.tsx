import { Grid } from "@mui/material";
import "./App.css";
import Logo from "./assets/rent-tools.png";
import LoginContainer from "./components/LoginContainer/LoginContainer";

function App() {
  return (
    <Grid
      container
      direction="column"
      minHeight={"100vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={10}
    >
      <Grid
        sx={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          width: { xs: 200, sm: 300 },
          height: 200,
        }}
      />
      <LoginContainer />
    </Grid>
  );
}

export default App;
