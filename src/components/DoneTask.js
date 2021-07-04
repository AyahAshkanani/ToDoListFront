import { observer } from "mobx-react";
import { TaskTitle } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import DoneCheckBox from "./DoneCheckBox";

const Donetask = (props) => {
  return (
    <TaskTitle className="done">
      <DoneCheckBox task={props.task}></DoneCheckBox>
      {props.task.title}
      <DeleteButton taskID={props.task.id} />
    </TaskTitle>
  );
};

export default observer(Donetask);
