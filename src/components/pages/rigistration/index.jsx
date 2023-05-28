import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const Registration = () => {
  return (
    <Paper className="registration_root">
      <Typography className="registration_title" variant="h5">
        Создание аккаунта
      </Typography>
      <div className="registration_avatar">
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className="registration_field" label="Полное имя" fullWidth />
      <TextField className="registration_field" label="E-Mail" fullWidth />
      <TextField className="registration_field" label="Пароль" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Зарегистрироваться
      </Button>
    </Paper>
  );
};

export default Registration;
