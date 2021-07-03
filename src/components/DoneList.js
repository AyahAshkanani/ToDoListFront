import TaskStore from "../stores/taskStore";
import DoneTask from "./DoneTask";
import { ListTitle } from "../styles";
import { observer } from "mobx-react-lite";

const DoneList = () => {
  const DoneList = TaskStore.tasks
    .filter((task) => task.done)
    .map((task) => <DoneTask task={task} />);

  return (
    <div>
      {DoneList.length !== 0 ? <ListTitle>COMPLETED</ListTitle> : ""}

      <ul>{DoneList}</ul>
    </div>
  );
};

export default observer(DoneList);
