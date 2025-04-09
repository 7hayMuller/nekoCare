import GoogleIcon from "@mui/icons-material/Google";
import { Apple } from "@mui/icons-material";
import { Box, Button, Divider, OutlinedInput, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { usePatientContext } from "@/context/PatientContext";

const Code = () => {
  const { token, profile, setToken, setProfile } = usePatientContext();
  const inputs = Array.from({ length: 6 });
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [codeError, setCodeError] = useState(false);
  const [code, setCode] = useState(Array(6).fill(""));

  const onLogin = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);
    setCodeError(false);

    if (index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    const fullCode = updatedCode.join("");
    if (fullCode.length === 6) {
      if (fullCode === "123456") {
        const fakeToken = "jsdksdjksdjksdjksdjksdjkssdiakajsak";
        localStorage.setItem("token", fakeToken);
        localStorage.setItem("profile", "patient");
        setToken(fakeToken);
        setProfile("patient");
      } else {
        setCodeError(true);
      }
    }
  };

  useEffect(() => {
    if (!codeError && token && profile === "patient") {
      window.location.href = `/appointments`;
    }
  }, [token, profile]);

  return (
    <>
      <Typography variant="body1" fontWeight={700} sx={{ mt: 1 }}>
        Insira o código de segurança
      </Typography>

      <Typography variant="body2" sx={{ mt: 1, width: "80%" }}>
        Enviamos um código para o e-mail thaynamuller88@gmail.com para garantir
        sua segurança. Caso não tenha recebido, verifique sua caixa de spam.
      </Typography>

      <Box display="flex" gap={2} justifyContent="center" mt={2}>
        {inputs.map((_, i) => (
          <OutlinedInput
            key={i}
            inputRef={(el) => (inputRefs.current[i] = el)}
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: "center",
                fontSize: "1.5rem",
                width: "1.5rem",
                height: "1.5rem",
              },
            }}
            error={codeError}
            value={code[i]}
            onChange={(e: any) => onLogin(e, i)}
          />
        ))}
      </Box>

      {codeError && (
        <Box
          sx={{
            width: "70%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="caption" color="error">
            Código inválido
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          width: "77%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="text">Reenviar</Button>
      </Box>

      <Divider sx={{ width: "70%", my: 2 }}>ou</Divider>

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
    </>
  );
};

export default Code;
