import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { usePatientContext } from "@/context/PatientContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [patient, setPatient] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [patientError, setPatientError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { token, profile, setToken, setProfile } = usePatientContext();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const preventDefault = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onLogin = () => {
    const isPatientEmpty = !patient.trim();
    const isPasswordEmpty = !password.trim();

    setPatientError(isPatientEmpty);
    setPasswordError(isPasswordEmpty);

    if (isPatientEmpty || isPasswordEmpty) return;

    const fakeToken = "jsdksdjksdjksdjksdjksdjkssdiakajsak";
    localStorage.setItem("token", fakeToken);
    localStorage.setItem("profile", "patient");
    setToken(fakeToken);
    setProfile("patient");
  };

  useEffect(() => {
    if (patient && token && profile === "patient") {
      window.location.href = `/${patient}/appointments`;
    }
  }, [patient, token, profile]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginTop: -10,
      }}
    >
      <Box
        component="img"
        src="/assets/heroImageLogin.png"
        alt="Hero image"
        sx={{
          width: 500,
          height: 700,
          position: "relative",
          marginRight: "-100px",
          zIndex: 200,
        }}
      />

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "background.paper",
          borderRadius: 5,
          height: 500,
          width: 600,
          zIndex: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          padding: 4,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h2" fontWeight={700} color="primary">
            Neko
          </Typography>
          <Typography variant="h2" fontWeight={700} color="secondary">
            Care
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mt: 2 }}>
          Conecte-se. Organize. Cuide como um verdadeiro sensei
        </Typography>

        {/* Campo de usuário */}
        <Box sx={{ width: "70%", mt: 2 }}>
          <TextField
            fullWidth
            label="Usuário"
            variant="standard"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
            error={patientError}
            helperText={patientError ? "Preencha o campo de usuário" : ""}
          />
        </Box>

        {/* Campo de senha */}
        <Box sx={{ width: "70%", mt: 2 }}>
          <FormControl fullWidth variant="standard" error={passwordError}>
            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={preventDefault}
                    onMouseUp={preventDefault}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordError && (
              <Typography variant="caption" color="error">
                Preencha o campo de senha
              </Typography>
            )}
          </FormControl>
        </Box>

        {/* Botão de login */}
        <Box sx={{ width: "70%", mt: 2 }}>
          <Button
            fullWidth
            onClick={onLogin}
            variant="contained"
            sx={{
              backgroundColor: "secondary.main",
              color: "background.default",
            }}
          >
            Acessar
          </Button>
        </Box>

        <Divider sx={{ width: "70%", my: 2 }}>ou</Divider>

        {/* Login com Google */}
        <Box sx={{ width: "70%" }}>
          <Button
            fullWidth
            startIcon={<GoogleIcon />}
            variant="outlined"
            sx={{
              borderColor: "googleRed.main",
              color: "googleRed.main",
            }}
          >
            Login com Google
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Login;
