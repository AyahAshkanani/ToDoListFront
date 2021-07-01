import './App.css';
// components
import Home from "./components/Home"
import TasksList from "./components/TasksList"
import DoneList from "./components/DoneList"
function App() {
  return (
    <div>
      <Home/>
      
      <div>
      {/* <h3>Tasks To Do</h3> */}
      <TasksList />
      </div>
      <div>
        {/* <h3>Done Tasks</h3> */}
        <DoneList />
      </div>
      
     
    </div>
  );
}

export default App;
