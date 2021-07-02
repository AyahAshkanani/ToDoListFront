import TaskStore from "../stores/taskStore";
import Task from "./Task";
import { ListTitle } from "../styles";
import { observer } from "mobx-react-lite";

const TaskList = () => {
  const TaskList = TaskStore.tasks
    .filter((task) => !task.done)
    .map((task) => <Task task={task} />);

  return (
    <div>
      <ListTitle>TO DO</ListTitle>
      <ul>{TaskList}</ul>
    </div>
  );
};

export default observer(TaskList);
