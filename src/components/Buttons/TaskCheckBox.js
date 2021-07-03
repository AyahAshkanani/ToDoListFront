import Checkbox from "@material-ui/core/Checkbox";
import taskStore from "../../stores/taskStore";

const TaskCheckBox = (props) => {
  const handleCheck = (event) => {
    taskStore.taskUpdate(props.task);
    event.target.checked = false;
  };
  return (
    <Checkbox
      color="default"
      inputProps={{ "aria-label": "checkbox with default color" }}
      style={{ color: "#C2C2C2" }}
      onClick={handleCheck}
    />
  );
};

export default TaskCheckBox;
