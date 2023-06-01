import { Box, Grid, Modal, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import { ITools } from "../../screens/Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface IToolContainer {
  content: ITools;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80%",
  outline: "0 !important",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const ToolContainer: React.FC<IToolContainer> = ({ content }) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleOpenModal = () => setOpen(true);
  const [contentValue] = useState<string>(
    content?.img.split("assets/")[1].split(".")[0].toUpperCase()
  );

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Header renderImage renderContent>
            <h1>Locar Ferramentas</h1>
          </Header>
          <Grid container gap={5} px={5}>
            <h1>Locação de Ferramentas</h1>
            <Grid container item gap={1}>
              <label title="DE">De: </label>
              <input type="date" name="" id="" />
              <label title="DE">Para: </label>
              <input type="date" name="" id="" />
            </Grid>
            <Grid
              container
              item
              alignItems="center"
              justifyContent="space-between"
            >
              <label>Descrição: </label>
              <OutlinedInput
                sx={{ width: "90%" }}
                type="text"
                value={contentValue}
              />
            </Grid>
            <Grid container item border="1px solid gray" gap={3} p={3}>
              <Grid
                container
                item
                gap={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <label>Colaborador: </label>
                <OutlinedInput sx={{ width: "80%" }} type="text" />
              </Grid>
              <Grid
                container
                item
                gap={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <label>Tipo Colaborador: </label>
                <OutlinedInput sx={{ width: "80%" }} type="text" />
              </Grid>
              <Grid
                container
                item
                gap={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <label>Turno: </label>
                <OutlinedInput sx={{ width: "80%" }} type="text" />
              </Grid>
            </Grid>
          </Grid>
          <Footer rest={{ position: "absolute", bottom: 0 }}/>
        </Box>
      </Modal>
      <Box
        component="svg"
        onClick={handleOpenModal}
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
    </>
  );
};

export default ToolContainer;
