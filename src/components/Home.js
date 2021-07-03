import React from "react";
import { Title } from "../styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { observer } from "mobx-react";
import TaskStore from "../stores/taskStore";
import { floor } from "lodash";

const Home = () => {
  const doneList = TaskStore.tasks.filter((task) => task.done);
  const toDoList = TaskStore.tasks.filter((task) => !task.done);

  const percentage = floor(
    (doneList.length / (doneList.length + toDoList.length)) * 100
  );

  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          width: 130,
          height: 130,
          float: "left",
          padding: 30,
          fontWeight: "bolder",
        }}
      >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "20px",
            pathColor: "#54E454",
            textColor: "black",
          })}
        />
      </div>
      <Title className="text" style={{ float: "left" }}>
        Done with tasks
      </Title>
    </div>
  );
};

export default observer(Home);
