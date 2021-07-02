import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";

const Donetask = (props) => {
  return (
    <p>
      <Checkbox
        disabled
        checked
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#54E454" }}
      />
      {props.task.title}
    </p>
  );
};

export default observer(Donetask);
