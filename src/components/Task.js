import { observer } from "mobx-react";
import Checkbox from "@material-ui/core/Checkbox";
import {
  WorkTag,
  AiOutlineWarningStyled,
  HomeTag,
  IoMdCloseStyled,
} from "../styles";

const Task = (props) => {
  return (
    <p>
      <Checkbox
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
        style={{ color: "#C2C2C2" }}
      />
      {props.task.title}{" "}
      {/* if it has a tag, see which. <WorkTag> or <HomeTag>*/}
      <WorkTag
        label="work"
        style={{ backgroundColor: "#3058FF", color: "white", height: 20 }}
      ></WorkTag>
      {/* if it has a priority, see which. className="lowPriority" or   className="highPriority"*/}
      <AiOutlineWarningStyled
        size="25px"
        className="lowPriority"
        style={{ verticalAlign: "middle" }}
      ></AiOutlineWarningStyled>
      <IoMdCloseStyled></IoMdCloseStyled>
    </p>
  );
};

export default observer(Task);
