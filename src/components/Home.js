import React from "react";
import TasksList from "./TasksList";

import { Title, Description } from "../styles";
const Home = () => {
  return (
    <div>
      <Title className="text">CheckList</Title>
      <Description className="text">
        A place where you can kepp track of your tasks
      </Description>
      <TasksList></TasksList>
    </div>
  );
};

export default Home;
