import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";
import {
  WorkTag,
  AiOutlineWarningStyled,
  HomeTag,
  IoMdCloseStyled,
} from "../styles";

const Task = (props) => {
  const hasTag = () => {
    if (props.task.hasOwnProperty("tag")) {
      console.log("has tag");
      if (props.task.task === "work") {
        return (
          <WorkTag
            label="work"
            style={{ backgroundColor: "#3058FF", color: "white", height: 20 }}
          ></WorkTag>
        );
      } else if (props.task.task === "home") {
        return (
          <HomeTag
            label="work"
            style={{ backgroundColor: "#EE3585", color: "white", height: 20 }}
          ></HomeTag>
        );
      }
    }
  };

  return (
    <p>
      <Checkbox
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#C2C2C2" }}
      />
      {props.task.title}
      {props.task.hasOwnProperty("tag") && props.task.tag === "work" ? (
        <WorkTag
          label="work"
          style={{ backgroundColor: "#3058FF", color: "white", height: 20 }}
        ></WorkTag>
      ) : (
        ""
      )}
      {props.task.hasOwnProperty("tag") && props.task.tag === "home" ? (
        <HomeTag
          label="home"
          style={{ backgroundColor: "#EE3585", color: "white", height: 20 }}
        ></HomeTag>
      ) : (
        ""
      )}
      {props.task.hasOwnProperty("priority") ? (
        <AiOutlineWarningStyled
          size="25px"
          className={props.task.priority}
          style={{ verticalAlign: "middle" }}
        ></AiOutlineWarningStyled>
      ) : (
        ""
      )}

      <IoMdCloseStyled></IoMdCloseStyled>
    </p>
  );
};

export default observer(Task);
