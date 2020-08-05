import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { getPostData } from "../actions";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import { useSelector, useDispatch } from "react-redux";
import { logoutData } from "../actions/index";

const AddNewFriend = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    props.getPostData(user);
    props.history.push("/dashboard");
    setUser({
      name: "",
      age: "",
      email: "",
    });
  };
  const logout = (e) => {
    window.localStorage.removeItem("welcome");

    dispatch(logoutData(user));
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
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
          <Link onClick={logout}>
            <button>Logout</button>
          </Link>
        </div>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add New Friend
          </Typography>
          <form className={classes.form} noValidate onSubmit={formSubmit}>
            {/*-------------------Name----------------------- */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={user.name}
              onChange={handleChange}
            />

            {/*-------------------Age----------------------- */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              autoFocus
              value={user.age}
              onChange={handleChange}
            />
            {/*-------------------Email----------------------- */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={user.email}
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
const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPostData })(AddNewFriend);
//export default AddNewFriend;

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
