
import taskStore from "../../stores/taskStore";
import Delete from "@material-ui/icons/Delete";

const DeleteButton = (props) => {
  const taskDelete = () => {
    taskStore.taskDelete(props.taskID);
  };
  return (
    <Delete onClick={taskDelete}/> 
  );
};

export default DeleteButton;
