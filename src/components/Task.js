import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";
import Delete from "@material-ui/icons/Delete";
import TaskCheckBox from "./Buttons/TaskCheckBox";

// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { WorkTag, AiOutlineWarningStyled, HomeTag, TaskTitle } from "../styles";

const Task = (props) => {
  return (
    <TaskTitle>
      {/* <Checkbox
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#C2C2C2" }}
      /> */}
      <TaskCheckBox task={props.task}></TaskCheckBox>
      <Delete
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#C2C2C2", float: "right", height: 20 }}
        // padding:20
      />

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
    </TaskTitle>
  );
};

export default observer(Task);
