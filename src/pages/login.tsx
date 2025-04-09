import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Apple } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const sendCode = () => {
    const isEmailEmpty = !email.trim();

    setEmailError(isEmailEmpty);

    if (isEmailEmpty) return;

    window.location.href = "/code";
  };

  return (
    <>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Conecte-se. Organize. Cuide como um verdadeiro sensei
      </Typography>
      <Box sx={{ width: "70%", mt: 2 }}>
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

      <Box sx={{ width: "70%", mt: 2 }}>
        <Button
          fullWidth
          startIcon={<Apple />}
          variant="contained"
          sx={{
            borderColor: "appleBlack.main",
            backgroundColor: "appleBlack.main",
            color: "background.default",
          }}
        >
          Login com Apple
        </Button>
      </Box>

      <Divider sx={{ width: "70%", my: 2 }}>ou</Divider>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Digite seu e-mail e te enviaremos um código de segurança
      </Typography>

      <Box sx={{ width: "70%", mt: 2 }}>
        <TextField
          fullWidth
          label="E-mail"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
          helperText={emailError ? "E-mail Inválido" : ""}
        />
      </Box>
      <Box sx={{ width: "70%", mt: 2 }}>
        <Button
          fullWidth
          onClick={sendCode}
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            color: "background.default",
          }}
        >
          Continuar
        </Button>
      </Box>
    </>
  );
};

export default Login;
