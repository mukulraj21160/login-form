import React, { useState } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
// import backgroundimg from "../Assets/pencils.png";

const useStyle = makeStyles((theme) => ({
  form_container: {
    fontFamily: "Sacramento, cursive",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: "url(" + backgroundimg + ")",
    backgroundColor: "#06224a",
    backgroundSize: "cover",
    backgroundPosition: "center",
    perspective: "1000px",
  },
  form: {
    height: "430px",
    width: "350px",
    background: "#f63838",
    textAlign: "center",
    alignItems: "center",
    borderRadius: "5px",
    boxShadow: "0 5px 15px rgba (0,0,0,.3) ",
    borderTop: "1px solid rgba (255,255,255,.3) ",
    borderLeft: "1px solid rgba (255,255,255,.3) ",
    backdropFilter: "blur (10px) ",
    transformStyle: "preserve-3d",
  },
  heading: {
    fontSize: "30px",
    color: "#",
    letterSpacing: "3px",
  },
  input_Data: {
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
  btn: {
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
        <Grid item lg={4}></Grid>
        <Grid
          item
          lg={4}
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
              variant="contained"
              onClick={updated}
            >
              Log in
            </Button>
          </form>
        </Grid>
        <Grid item lg={4}></Grid>
      </Grid>
    </div>
  );
};

export default Form;
