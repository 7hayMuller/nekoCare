import List from "@/components/List";
import { Box, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
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
            title="Terça-feira 01/04 ás 13:30h"
            description="Consulta marcada com a Drª Juliana"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default HomePage;
