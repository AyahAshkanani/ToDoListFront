import { TextField, MenuItem, Button } from "@material-ui/core";
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
          select
          label="Tag"
          value="none"
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
          select
          label="Priority"
          value="none"
          style={{ width: "7.9%" }}
          //   onChange={handleChange}
          //   helperText="Priority"
        >
          {priorities.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        {/* <Button
          variant="contained"
          style={{ color: "#474747", fontSize: 20, width: 20, marginLeft: 20 }}
        >
          +
        </Button> */}
        <AddTaskButtonStyled> +</AddTaskButtonStyled>
      </form>
    </div>
  );
};

export default AddTask;
