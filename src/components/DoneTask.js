import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";
import { TaskTitle } from "../styles";
import Delete from "@material-ui/icons/Delete";
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
      <IconButton><DeleteButton
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#C2C2C2", float: "right", height: 20 }}
        // padding:20
      /></IconButton>
      
    </TaskTitle>
  );
};

export default observer(Donetask);
