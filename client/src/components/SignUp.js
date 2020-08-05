import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { postRegisterData } from "../actions/index";
const SignUp = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const signUp = (e) => {
    e.preventDefault();
    // console.log("credentials", credentials);
    dispatch(postRegisterData(credentials));
    setCredentials({
      username: "",
      password: "",
      role: "",
    });
    props.history.push("/login");
    // axiosWithAuth()
    //   .post("/auth/register", credentials)
    //   .then((res) => {
    //       console.log("res.data",res.data)
    //     //localStorage.setItem("token", res.data.payload);
    //     localStorage.setItem("userSession", res.data.payload);
    //     setCredentials({
    //       username: "",
    //       password: "",
    //       role: "",
    //     });
    //     props.history.push("/login");
    //   })
    //   .catch((err) => {
    //     console.log("error returned from register request", err);
    //   });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="login-menu">
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SignUp
          </Typography>
          <form className={classes.form} noValidate onSubmit={signUp}>
            {/*-------------------User Name----------------------- */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={credentials.username}
              onChange={handleChange}
            />

            {/*-------------------Password----------------------- */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="role"
              label="Role"
              id="role"
              autoComplete="role"
              value={credentials.role}
              onChange={handleChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default SignUp;

// <div>
//       <form onSubmit={login}>
//         <input
//           type="text"
//           name="username"
//           value={credentials.username}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           value={credentials.password}
//           onChange={handleChange}
//         />
//         <button>Log in</button>
//       </form>
//     </div>

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="/" style={{ textDecoration: "none", color: "#757575" }}>
        TatianaZ Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
