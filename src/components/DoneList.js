import TaskStore from "../stores/taskStore";
import Task from "./Task";
import { observer } from "mobx-react-lite";

const DoneList = () => {
  const DoneList = TaskStore.tasks
    .filter((task) => task.done)
    .map((task) => <Task task={task} />);

  return (
    <div>
      <h3>COMPLETED</h3>
      <ul>{DoneList}</ul>
    </div>
  );
};

export default observer(DoneList);
