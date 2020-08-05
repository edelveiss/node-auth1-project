import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import { Link } from "react-router-dom";
import FriendCard from "./FriendCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getData } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { logoutData } from "../actions/index";
function Dashboard(props) {
  //   const classes = useStyles();
  //   const [friends, setFriends] = useState([]);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });
  useEffect(() => {
    props.getData();
  }, []);
  const logout = (e) => {
    window.localStorage.removeItem("userSession");

    dispatch(logoutData(user));
  };

  //   const getData = () => {
  //     axiosWithAuth()
  //       .get("/friends")
  //       .then((res) => {
  //         console.log("res", res);
  //         setFriends(res.data);
  //       })
  //       .catch((err) => {
  //         console.log("Err in getData is: ", err);
  //       });
  //   };
  //   const deleteData = (id) => {
  //     axiosWithAuth()
  //       .delete(`/friends/${id}`)
  //       .then((res) => {
  //         console.log("res", res);
  //         setFriends(res.data);
  //       })
  //       .catch((err) => {
  //         console.log("Err in deleteData is: ", err);
  //       });
  //   };

  //   const addData = (newFriend) => {
  //     axiosWithAuth()
  //       .post("/friends", newFriend)
  //       .then((res) => {
  //         console.log("res", res);
  //         setFriends(res.data);
  //       })
  //       .catch((err) => {
  //         console.log("Err in addData is: ", err);
  //       });
  //   };

  return (
    <div className="grid">
      <div className="nav-button">
        <Link to="/">
          <button style={{ color: "white", border: "1px solid white" }}>
            Home
          </button>
        </Link>
        <Link to="/add-friend">
          <button
            style={{
              marginLeft: "2rem",
              marginRight: "4rem",
              color: "white",
              border: "1px solid white",
            }}
          >
            Add New Friend
          </button>
        </Link>
        <Link>
          <button
            onClick={logout}
            style={{
              marginLeft: "2rem",
              marginRight: "4rem",
              color: "white",
              border: "1px solid white",
            }}
          >
            Logout
          </button>
        </Link>
      </div>
      <Grid container spacing={3} style={{ marginTop: "2rem" }}>
        {props.friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </Grid>
    </div>
  );
}
//export default Dashboard;
const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getData })(Dashboard);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
