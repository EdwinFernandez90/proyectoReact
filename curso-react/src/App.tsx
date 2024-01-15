import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";

import "./App.css";
import { Container } from "@mui/system";
import { Collapse } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Datos enviados correctamente
            </Alert>
          </Collapse>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Nombre"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Apellido"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Correo"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Enviar datos
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
