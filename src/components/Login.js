import React from "react";
import { Grid } from "@mui/material";
import "./Styles/Login.css";
import { Button } from "@mui/material";
import Logo from "../assets/logo.png";
import "animate.css";

function Login() {
  return (
    <div className="LoginPage  shadow-lg shadow-indigo-500/50">
      <Grid container spacing={0}>
        <Grid item={4}>
          <img
            src={Logo}
            alt="BSRS logo"
            className="Logo-top animate__animated animate__backInDown"
          />{" "}
          <br />
          <div className="Input_field">
            <h3 className="animate__animated animate__flipInX">
              Bangladesh 2nd national astro carnival 🚀{" "}
            </h3>
            <label>Enter your E-mail</label> <br />
            <input type="email" /> <br />
            <label>Enter your Password</label> <br />
            <input type="password" /> <br />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </div>
        </Grid>

        <Grid item={4}>
          <div className="LogoSide">
            <img src={Logo} alt="BSRS logo" className="Logo" /> <br />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
