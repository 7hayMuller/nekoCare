import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import veterinarySpecialities from "@/mocks/veterinarySpecialties.json";
import scheduleTime from "@/mocks/scheduleTime.json";
import { useState } from "react";
import { formatPhone } from "@/utils/normalize";

const ExamsCreate = () => {
  const [successAlert, setSuccessAlert] = useState<boolean>(false);
  const [phone, setPhone] = useState("");

  const onFinish = () => {
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
    }, 3000);
  };

  return (
    <>
      {successAlert && (
        <Alert
          icon={
            <Typography sx={{ mt: "-10px" }} variant="h4">
              😿
            </Typography>
          }
          sx={{
            padding: 2,
            width: "400px",
            position: "absolute",
            top: 50,
            right: 50,
          }}
          severity="error"
        >
          Erro ao marcar exame, por favor tente novamente mais tarde.
        </Alert>
      )}
      <Box mt={-5}>
        <Grid container spacing={2} justifyContent="start">
          <Grid size={12}>
            <Typography variant="h5" fontWeight={600} align="left">
              Agendar exame
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          component="form"
          p={5}
          sx={{
            backgroundColor: "background.paper",
            borderRadius: 5,
            border: (theme) => `1px solid ${theme.palette.indico.main}`,
            mt: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <Grid size={6}>
            <TextField fullWidth required label="Nome do Pet" defaultValue="" />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              required
              label="Tutor Responsável"
              defaultValue=""
              //value={patient}
              //onChange={(e) => setPatient(e.target.value)}
              //error={patientError}
              //helperText={patientError ? "Preencha o campo de usuário" : ""}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              label="Telefone"
              required
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              value={phone}
            />
          </Grid>

          <Grid size={6}>
            <TextField
              id="outlined-select-specialities"
              fullWidth
              required
              select
              label="Selecione a especialidade"
              defaultValue=""
            >
              {veterinarySpecialities.map((option: any) => (
                <MenuItem key={option.name} value={option.name}>
                  {`${option.name}, ${option.description}`}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={6}>
            <TextField
              id="outlined-select-doctors"
              fullWidth
              required
              select
              label="Selecione o veterinário"
              defaultValue=""
            >
              {veterinarySpecialities.map((option: any) => (
                <MenuItem key={option.name} value={option.name}>
                  {`${option.name}, ${option.description}`}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid size={3}>
            <TextField
              fullWidth
              required
              label="Data da Consulta"
              defaultValue=""
              type="date"
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          </Grid>
          <Grid size={3}>
            <TextField
              id="outlined-select-schedule-time"
              fullWidth
              required
              select
              label="Selecione o horário"
              defaultValue=""
            >
              {scheduleTime.map((option: any) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid mt={3}>
            <Button
              size="large"
              variant="contained"
              sx={{ width: "300px", backgroundColor: "primary" }}
              onClick={onFinish}
            >
              Agendar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ExamsCreate;
