import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";
import { TaskTitle } from "../styles";
import { IconButton } from "@material-ui/core";
import DeleteButton from "./Buttons/DeleteButton";

const Donetask = (props) => {
  return (
    <TaskTitle className="done">
      <Checkbox
        disabled
        checked
        check
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#54E454" }}
      />
      {props.task.title}
      <DeleteButton taskID={props.task.id} />
    </TaskTitle>
  );
};

export default observer(Donetask);
