import Checkbox from "@material-ui/core/Checkbox";
import taskStore from "../stores/taskStore";

const DoneCheckBox = (props) => {
  const handleCheck = (event) => {
    taskStore.taskUpdate(props.task);
    event.target.checked = false;
  };
  return (
    <Checkbox
      // disabled
      checked
      check
      inputProps={{ "aria-label": "checkbox with default color" }}
      style={{ color: "#54E454" }}
      onClick={handleCheck}
    />
  );
};

export default DoneCheckBox;
