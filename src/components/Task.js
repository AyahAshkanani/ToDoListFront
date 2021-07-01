import { observer } from "mobx-react";

const Task = (props) => {
  return <p>{props.task.title}</p>;
};

export default observer(Task);
