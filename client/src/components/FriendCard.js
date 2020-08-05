import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteData, updateData } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import UpdateForm from "./UpdateForm";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  media: {
    height: 140,
  },
});

function FriendCard(props) {
  const [toggleEdit, setToggleEdit] = useState(true);
  const [editState, setEditState] = useState(props.friend);
  const toggle = () => {
    setToggleEdit(!toggleEdit);
  };

  const handleDelete = () => {
    props.deleteData(props.friend.id);
  };
  return (
    <Grid item xs={6} sm={4} style={{ marginTop: "2rem" }}>
      {toggleEdit ? (
        <Card className="userCard">
          <h2>username: {props.friend.username}</h2>
          <h2>role: {props.friend.role === 1 ? "Admin" : "User"}</h2>
          {/** 
          <CardActions style={{ marginLeft: "25%" }}>
            <Button
              className="card-button"
              size="small"
              color="primary"
              onClick={toggle}
            >
              Edit
            </Button>
            <Button
              className="card-button"
              size="small"
              color="primary"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </CardActions>
*/}
        </Card>
      ) : (
        <UpdateForm
          editState={editState}
          friend={props.friend}
          toggle={toggle}
          setEditState={setEditState}
        />
      )}
    </Grid>
  );
}
export default connect(null, { deleteData, updateData })(FriendCard);
