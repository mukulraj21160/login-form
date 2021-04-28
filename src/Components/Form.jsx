import React, { useState } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import backgroundimg from "../Assets/car.jpg";

const useStyle = makeStyles((theme) => ({
  form_container: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      fontFamily: "Sacramento, cursive",
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundImage: "url(" + backgroundimg + ")",
      // backgroundColor: "#6807f9",
      backgroundSize: "cover",
      backgroundPosition: "center",
      perspective: "1000px",
    },
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Sacramento, cursive",
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundImage: "url(" + backgroundimg + ")",
      // backgroundColor: "#6807f9",
      backgroundSize: "cover",
      backgroundPosition: "center",
      perspective: "1000px",
    },

    [theme.breakpoints.up("md")]: {
      fontFamily: "Sacramento, cursive",
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundImage: "url(" + backgroundimg + ")",
      // backgroundColor: "#6807f9",
      backgroundSize: "cover",
      backgroundPosition: "center",
      perspective: "1000px",
    },
    [theme.breakpoints.up("lg")]: {
      fontFamily: "Sacramento, cursive",
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundImage: "url(" + backgroundimg + ")",
      // backgroundColor: "#6807f9",
      backgroundSize: "cover",
      backgroundPosition: "center",
      perspective: "1000px",
    },
  },
  form: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      height: "430px",
      width: "350px",
      background: "rgba(255,255,255,.1)",
      textAlign: "center",
      alignItems: "center",
      borderRadius: "5px",
      boxShadow: "0 5px 15px rgba (0,0,0,.3) ",
      borderTop: "1px solid rgba (255,255,255,.3) ",
      borderLeft: "1px solid rgba (255,255,255,.3) ",
      backdropFilter: "blur (10px) ",
      transformStyle: "preserve-3d",
    },
    [theme.breakpoints.up("sm")]: {
      height: "430px",
      width: "350px",
      background: "rgba(255,255,255,.1)",
      textAlign: "center",
      alignItems: "center",
      borderRadius: "5px",
      boxShadow: "0 5px 15px rgba (0,0,0,.3) ",
      borderTop: "1px solid rgba (255,255,255,.3) ",
      borderLeft: "1px solid rgba (255,255,255,.3) ",
      backdropFilter: "blur (10px) ",
      transformStyle: "preserve-3d",
    },

    [theme.breakpoints.up("md")]: {
      height: "430px",
      width: "350px",
      background: "rgba(255,255,255,.1)",
      textAlign: "center",
      alignItems: "center",
      borderRadius: "5px",
      boxShadow: "0 5px 15px rgba (0,0,0,.3) ",
      borderTop: "1px solid rgba (255,255,255,.3) ",
      borderLeft: "1px solid rgba (255,255,255,.3) ",
      backdropFilter: "blur (10px) ",
      transformStyle: "preserve-3d",
    },
    [theme.breakpoints.up("lg")]: {
      height: "430px",
      width: "350px",
      background: "rgba(255,255,255,.1)",
      textAlign: "center",
      alignItems: "center",
      borderRadius: "5px",
      boxShadow: "0 5px 15px rgba (0,0,0,.3) ",
      borderTop: "1px solid rgba (255,255,255,.3) ",
      borderLeft: "1px solid rgba (255,255,255,.3) ",
      backdropFilter: "blur (10px) ",
      transformStyle: "preserve-3d",
    },
  },
  heading: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      fontSize: "30px",
      color: "#fff",
      letterSpacing: "3px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "30px",
      color: "#fff",
      letterSpacing: "3px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      color: "#fff",
      letterSpacing: "3px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "30px",
      color: "#fff",
      letterSpacing: "3px",
    },
  },
  input_Data: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      outline: "none",
      border: "none",
      height: "40px",
      width: "82%",
      background: "rgba (0,0,0,.1) ",
      color: "rgba (255,255,255,.7) ",
      boxShadow: "0 0 5px rgba(0,0,0,.5) inset",
      fontSize: "17px",
      padding: "0 10px",
      margin: "15px 0",
      letterSpacing: "1px",
      borderRadius: "15px",
    },
    [theme.breakpoints.up("sm")]: {
      outline: "none",
      border: "none",
      height: "40px",
      width: "82%",
      background: "rgba (0,0,0,.1) ",
      color: "rgba (255,255,255,.7) ",
      boxShadow: "0 0 5px rgba(0,0,0,.5) inset",
      fontSize: "17px",
      padding: "0 10px",
      margin: "15px 0",
      letterSpacing: "1px",
      borderRadius: "15px",
    },

    [theme.breakpoints.up("md")]: {
      outline: "none",
      border: "none",
      height: "40px",
      width: "82%",
      background: "rgba (0,0,0,.1) ",
      color: "rgba (255,255,255,.7) ",
      boxShadow: "0 0 5px rgba(0,0,0,.5) inset",
      fontSize: "17px",
      padding: "0 10px",
      margin: "15px 0",
      letterSpacing: "1px",
      borderRadius: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      outline: "none",
      border: "none",
      height: "40px",
      width: "82%",
      background: "rgba (0,0,0,.1) ",
      color: "rgba (255,255,255,.7) ",
      boxShadow: "0 0 5px rgba(0,0,0,.5) inset",
      fontSize: "17px",
      padding: "0 10px",
      margin: "15px 0",
      letterSpacing: "1px",
      borderRadius: "15px",
    },
  },
  btn: {
    fontFamily: theme.typography.body1.fontFamily,
    [theme.breakpoints.up("xs")]: {
      fontSize: "20px",
      fontWeight: "bold",
      width: "90%",
      backgroundColor: "#2e3b65",
      color: "#fff",
      "&:hover": {
        color: "#000",
      },
      cursor: "pointer",
      marginTop: "30px",
      borderRadius: "10px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
      fontWeight: "bold",
      width: "90%",
      backgroundColor: "#2e3b65",
      color: "#fff",
      "&:hover": {
        color: "#000",
      },
      cursor: "pointer",
      marginTop: "30px",
      borderRadius: "10px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      fontWeight: "bold",
      width: "90%",
      backgroundColor: "#2e3b65",
      color: "#fff",
      "&:hover": {
        color: "#000",
      },
      cursor: "pointer",
      marginTop: "30px",
      borderRadius: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "20px",
      fontWeight: "bold",
      width: "90%",
      backgroundColor: "#2e3b65",
      color: "#fff",
      "&:hover": {
        color: "#000",
      },
      cursor: "pointer",
      marginTop: "30px",
      borderRadius: "10px",
    },
  },
}));

const Form = () => {
  const classes = useStyle();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const updated = () => {
    setName("");
    // setEmail("");
    // setPassword("");
  };
  return (
    <div className={classes.form_container}>
      <Grid container item>
        <Grid item lg={4} md={4} sm={1} xs={1}></Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={10}
          xs={10}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <form
            className={classes.form}
            style={{ textAlign: "center", transformStyle: "preserve-3d" }}
          >
            <h3 className={classes.heading}>Login Form</h3>
            <input
              type="text"
              className={classes.input_Data}
              placeholder="UserName"
              value={name}
              onChange={handleNameChange}
            ></input>
            <input
              type="email"
              className={classes.input_Data}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <input
              type="password"
              className={classes.input_Data}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            ></input>
            <Button
              className={classes.btn}
              variant="outlined"
              onClick={updated}
            >
              Log in
            </Button>
          </form>
        </Grid>
        <Grid item lg={4} md={4} sm={1} xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Form;
