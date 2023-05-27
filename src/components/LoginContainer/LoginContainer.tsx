import { Grid, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
1;
const LoginContainer = () => {
  const [size, setSize] = useState(`800px`);

  useEffect(() => {
    const checkSize = () => {
      console.log(size);
      if (window.innerWidth < 600) {
        return setSize("80%");
      }

      setSize("800px");
    };

    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, [size]);

  return (
    <Grid gap={2} container justifyContent="center" maxWidth={size}>
      <TextField fullWidth label="USUÁRIO" variant="filled" type="email" />
      <TextField fullWidth label="SENHA" variant="filled" type="password" />
      <Button
        sx={{
          fontWeight: 700,
          borderRadius: 2,
          padding: "10px 25px",
          backgroundColor: "#F96915",
          border: "2px solid #fff",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#F96915",
            border: "2px solid black",
          },
        }}
      >
        Entrar
      </Button>
    </Grid>
  );
};

export default LoginContainer;
