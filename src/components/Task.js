import { observer } from "mobx-react";
import DeleteButton from "./Buttons/DeleteButton";
import TaskCheckBox from "./Buttons/TaskCheckBox";
import { WorkTag, AiOutlineWarningStyled, HomeTag, TaskTitle } from "../styles";

const Task = (props) => {
  return (
    <TaskTitle>
      <TaskCheckBox task={props.task}></TaskCheckBox>
      {props.task.title}
      {props.task.tag === "work" ? (
        <WorkTag
          label="work"
          style={{ backgroundColor: "#3058FF", color: "white", height: 20 }}
        ></WorkTag>
      ) : (
        ""
      )}
      {props.task.tag === "home" ? (
        <HomeTag
          label="home"
          style={{ backgroundColor: "#EE3585", color: "white", height: 20 }}
        ></HomeTag>
      ) : (
        ""
      )}
      {props.task.tag !== "none" ? (
        <AiOutlineWarningStyled
          size="25px"
          className={props.task.priority}
          style={{ verticalAlign: "middle" }}
        ></AiOutlineWarningStyled>
      ) : (
        ""
      )}
      <DeleteButton taskID={props.task.id} />
    </TaskTitle>
  );
};

export default observer(Task);
