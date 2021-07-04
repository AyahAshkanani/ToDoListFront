import { TextField, MenuItem } from "@material-ui/core";
import { AddTaskButtonStyled } from "../styles";
import { useState } from "react";
import taskStore from "../stores/taskStore";

const AddTask = (props) => {
  const [task,setTask] = useState(
    {
        title:"",
        tag:"none",
        priority:"none",
    });

const handleChange = (event) => {
  setTask({ ...task, [event.target.name]: event.target.value });

};

const handleSubmit = (event) => {
event.preventDefault();
 taskStore.taskCreate(task);
 event.target.reset();
//  setTask({ tag:"none", priority:"none" });

 
};


  const priorities = ["high", "low", "none"];
  const tags = ["work", "home", "none"];
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Add new task"
          style={{ width: "74%", marginLeft: 55 }}
          onChange={handleChange}
          name="title"
        />

        <TextField
          id="select-tag"
          name="tag"
          select
          label="Tag"
          style={{ width: "7.9%", color: "#C2C2C2" }}
          onChange={handleChange}
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
          onChange={handleChange}
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
