import "./App.css";
import { GlobalStyle } from "../src/styles";
import { ThemeProvider } from "styled-components";
// components
import Home from "./components/Home";
import TasksList from "./components/TasksList";
import DoneList from "./components/DoneList";
import AddTask from "./components/AddTask";

const theme = {
  mainColor: "#000000",
  backgroundColor: "white",
  greenColor: "#54E454",
  secondaryColor: "#474747",
  lightColor: "#C2C2C2",
  workTagColor: "#3058FF",
  homeTagColor: "#EE3585",
  highPriorityColor: "#FF4828",
  lowPriorityColor: "#FFC628",
};

function App() {
  return (
    <div style={{ paddingTop: 20, paddingLeft: 40, paddingRight: 40 }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
        <AddTask></AddTask>
        <div>
          <TasksList />
        </div>
        <div>
          <DoneList />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
