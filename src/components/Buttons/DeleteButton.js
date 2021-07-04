import taskStore from "../../stores/taskStore";
import Delete from "@material-ui/icons/Delete";
import { DeleteButtonStyled } from "../../styles";
import { IconButton } from "@material-ui/core";

const DeleteButton = (props) => {
  const handleDelete = () => {
    console.log("handle delete");
    taskStore.taskDelete(props.taskID);
  };
  return (
    <IconButton style={{ float: "right" }} onClick={handleDelete}>
      <Delete
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#C2C2C2", float: "right", height: 20 }}
      />{" "}
    </IconButton>
  );
};

export default DeleteButton;
