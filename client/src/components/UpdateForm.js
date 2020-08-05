import React from "react";
import { connect } from "react-redux";
import { updateData } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

function UpdateForm(props) {
  const inputChange = (e) => {
    const newEditData = {
      ...props.editState,
      [e.target.name]: e.target.value,
    };
    props.setEditState(newEditData);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.updateData(props.editState);
    props.toggle();
  };

  const formCancel = (e) => {
    e.preventDefault();
    props.toggle();
  };
  return (
    <Card className="userCard">
      <form onSubmit={formSubmit} style={{ width: "90%" }}>
        <p>
          {`Name:`}
          <input
            className="inputUpdate"
            id="name"
            type="text"
            name="name"
            onChange={inputChange}
            defaultValue={props.friend.name}
          />
        </p>
        <p>
          {`Age:    `}
          <input
            className="inputUpdate"
            id="age"
            type="text"
            name="age"
            onChange={inputChange}
            defaultValue={props.friend.age}
          />
        </p>
        <p>
          {`Email:`}
          <input
            className="inputUpdate"
            id="email"
            type="email"
            name="email"
            onChange={inputChange}
            defaultValue={props.friend.email}
          />
        </p>

        <CardActions style={{ marginLeft: "25%" }}>
          <Button
            type="submit"
            className="card-button"
            size="small"
            color="primary"
          >
            Submit
          </Button>
          <Button
            className="card-button"
            size="small"
            color="primary"
            onClick={formCancel}
          >
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
//export default UpdateForm;
export default connect(null, { updateData })(UpdateForm);
