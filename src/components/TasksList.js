import TaskStore from "../stores/taskStore";
import Task from "./Task";
import { observer } from "mobx-react-lite";

const TaskList = () => {
  const TaskList = TaskStore.tasks
    .filter((task) => !task.done)
    .map((task) => <Task task={task} />);

  return <div>{TaskList}</div>;
};

export default observer(TaskList);
