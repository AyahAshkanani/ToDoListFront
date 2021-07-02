import "./App.css";
import { GlobalStyle } from "../src/styles";
import { ThemeProvider } from "styled-components";
// components
import Home from "./components/Home";
import TasksList from "./components/TasksList";
import DoneList from "./components/DoneList";

const theme = {
  mainColor: "#000000",
  backgroundColor: "white",
  greenColor: "#54E454",
  secondaryColor: "#474747",
  lightColor: "#C2C2C2",
  workTagColor: "#3058FF",
  homeTagColor: "#EE3585",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />

        <div>
          {/* <h3>Tasks To Do</h3> */}
          <TasksList />
        </div>
        <div>
          {/* <h3>Done Tasks</h3> */}
          <DoneList />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
