import TaskStore from "../stores/taskStore";
import Task from "./Task";
import { observer } from "mobx-react-lite";

const TaskList = () => {
  const TaskList = TaskStore.tasks
    .filter((task) => !task.done)
    .map((task) => <Task task={task} />);

  return (
    <div>
      <h3>TO DO</h3>
      <ul>{TaskList}</ul>
    </div>
  );
};

export default observer(TaskList);
