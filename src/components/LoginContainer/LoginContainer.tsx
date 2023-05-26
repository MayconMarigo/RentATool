import { Grid, TextField, Button } from "@mui/material";

const LoginContainer = () => {
  return (
    <Grid gap={2} container justifyContent="center" maxWidth="800px">
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
