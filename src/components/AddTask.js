import { TextField, MenuItem } from "@material-ui/core";
import { AddTaskButtonStyled } from "../styles";

const AddTask = (props) => {
  const priorities = ["high", "low", "none"];
  const tags = ["work", "home", "none"];
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Add new task"
          style={{ width: "74%", marginLeft: 55 }}
        />

        <TextField
          id="select-tag"
          name="tag"
          select
          label="Tag"
          style={{ width: "7.9%", color: "#C2C2C2" }}
          //   onChange={handleChange}
          //   helperText="tag"
        >
          {tags.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="select-priority"
          name="priority"
          select
          label="Priority"
          style={{ width: "7.9%" }}
        >
          {priorities.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <AddTaskButtonStyled> +</AddTaskButtonStyled>
      </form>
    </div>
  );
};

export default AddTask;
