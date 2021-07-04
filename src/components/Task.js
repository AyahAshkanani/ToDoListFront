import { observer } from "mobx-react";
import Delete from "@material-ui/icons/Delete";
import TaskCheckBox from "./Buttons/TaskCheckBox";
import { WorkTag, AiOutlineWarningStyled, HomeTag, TaskTitle,  } from "../styles";
import { IconButton } from "@material-ui/core";
import DeleteButton from "./Buttons/DeleteButton";

// import DeleteButton from "./Buttons/DeleteButton";

const Task = (props) => {
  return (
    <TaskTitle>
      <TaskCheckBox task={props.task}></TaskCheckBox>
      {props.task.title}
      <IconButton>
      <Delete taskID={props.task.id} color="default" inputProps={{ "aria-label": "checkbox with default color" }} style={{ color: "#C2C2C2", float: "right", height: 20 }} 
      />
</IconButton> 
      
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
    </TaskTitle>
  );
};

export default observer(Task);
