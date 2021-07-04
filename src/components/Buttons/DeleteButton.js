
import taskStore from "../../stores/taskStore";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const deleteTask = () => {
    taskStore.deleteTask(props.taskID);
  };
  return (
    <DeleteButtonStyled onClick={deleteTask}/> 
  );
};

export default DeleteButton;
