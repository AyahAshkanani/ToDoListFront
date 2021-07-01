import { makeAutoObservable } from "mobx";
// import slugify from "react-slugify";
import axios from "axios";

class TaskStore {
  tasks = [];

  constructor() {
    //when data is updated the components will be rerendered
    makeAutoObservable(this);
  }

  fetchTask = async () => {
    try {
      const response = await axios.get("http://localhost:8000/tasks");
      this.tasks = response.data;
      console.log(this.tasks);
    } catch (error) {
      console.error("fetchTask: ", error);
    }
  };

  taskDelete = async (taskID) => {
    try {
      await axios.delete(`http://localhost:8000/tasks/${taskID}`);
      const updatedTasks = this.tasks.filter((task) => task.id !== taskID);

      this.tasks = updatedTasks;
    } catch (error) {
      console.error(error);
    }
  };

  taskCreate = async (newTask) => {
    try {
      const response = await axios.post("http://localhost:8000/tasks", newTask);
      console.log(response);
      this.tasks.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  taskUpdate = async (updateTask) => {
    try {
      await axios.put(
        `http://localhost:8000/cakes/${updateTask.id}`,
        updateTask
      );
      const task = this.tasks.find((task) => task.id === updateTask.id);
      task.done = updateTask.done;
      // task.slug = slugify(updateTask.name);
    } catch (error) {
      console.error(error);
    }
  };
}
const taskStore = new TaskStore();
taskStore.fetchTask();

export default taskStore;
