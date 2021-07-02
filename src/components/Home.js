import React from "react";
import { Title, Description } from "../styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Home = () => {
  const percentage = 66;
  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          width: 150,
          height: 150,
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

export default Home;
