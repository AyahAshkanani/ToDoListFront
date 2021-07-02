import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";
import { TaskTitle } from "../styles";
import Delete from "@material-ui/icons/Delete";

const Donetask = (props) => {
  return (
    <TaskTitle className="done">
      <Checkbox
        disabled
        checked
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#54E454" }}
      />
      {props.task.title}
      <Delete
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#C2C2C2", float: "right", height: 20 }}
        // padding:20
      />
    </TaskTitle>
  );
};

export default observer(Donetask);
