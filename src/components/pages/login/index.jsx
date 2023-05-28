import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Paper className="root">
      <Typography className="login_title" variant="h5">
        Вход в аккаунт
      </Typography>
      <TextField
        className="field"
        label="E-Mail"
        error
        helperText="Неверно указана почта"
        fullWidth
      />
      <TextField className="field" label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Войти
      </Button>
    </Paper>
  );
};

export default Login;
