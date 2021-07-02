import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";
import { TaskTitle } from "../styles";

const Donetask = (props) => {
  return (
    <TaskTitle>
      <Checkbox
        disabled
        checked
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#54E454" }}
      />
      {props.task.title}
    </TaskTitle>
  );
};

export default observer(Donetask);
