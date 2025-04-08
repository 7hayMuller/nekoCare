import List from "@/components/List";
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import CustomDialog from "@/components/Dialog";

const HomePage = () => {
  const navigate = useNavigate();
  const { patient } = useParams();

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [successAlert, setSuccessAlert] = useState<boolean>(false);

  const onCancelAppointment = () => {
    setSuccessAlert(true);
    setDialogOpen(false);
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
              😸
            </Typography>
          }
          sx={{
            padding: 2,
            width: "400px",
            position: "absolute",
            top: 50,
            right: 50,
          }}
          severity="success"
        >
          Sua consulta foi desmarcada com sucesso!
        </Alert>
      )}
      <Box>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid size={{ xs: 6, md: 8 }}>
            <Typography variant="h5" fontWeight={600}>
              Meus agendamentos
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 8 }}>
            <List
              avatar="/static/images/avatar/1.jpg"
              description="Consulta marcada com a Drª Juliana"
              title="Terça-feira 01/04 ás 13:30h"
              secondaryAction={
                <Grid container direction="row" spacing={1} px={5}>
                  <Grid>
                    <Tooltip title="Editar agendamento">
                      <IconButton
                        edge="end"
                        aria-label="update"
                        sx={{ color: (theme) => theme.palette.indico.main }}
                        onClick={() =>
                          navigate(`/${patient}/appointments/create`)
                        }
                      >
                        <EditCalendarIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>

                  <Grid>
                    <Tooltip title="Criar notificação">
                      <IconButton
                        edge="end"
                        aria-label="notification"
                        sx={{ color: (theme) => theme.palette.indico.main }}
                      >
                        <NotificationsIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid>
                    <Tooltip title="Desmarcar">
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        sx={{ color: (theme) => theme.palette.indico.main }}
                        onClick={() => setDialogOpen(true)}
                      >
                        <EventBusyIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center">
          <Grid mt={10}>
            <Button
              size="large"
              variant="contained"
              sx={{ width: "300px", backgroundColor: "primary" }}
              onClick={() => navigate(`/${patient}/appointments/create`)}
            >
              Marcar consulta
            </Button>
          </Grid>
        </Grid>
        <CustomDialog
          actions={
            <Grid container justifyContent="end">
              <Grid>
                <Button onClick={onCancelAppointment}>Desmarcar</Button>
              </Grid>
              <Grid>
                <Button color="secondary" onClick={() => setDialogOpen(false)}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          }
          content="Tem certeza que deseja desmarcar o agendamento?"
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Desmarcar agendamento"
        />
      </Box>
    </>
  );
};
export default HomePage;
