import React from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import Button from "./Button";
import "./TaskInfo.css";

const TaskInfo = () => {
  const params = useParams();
  const history = useHistory();

  const handleTaskBackButtonClick = () => {
    history.goBack();
  };
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleTaskBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-info-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          dicta ab placeat perferendis quidem ipsa omnis consectetur, cumque,
          aperiam, explicabo odio commodi illum est laboriosam laborum. Sed
          excepturi rerum aut.
        </p>
      </div>
    </>
  );
};

export default TaskInfo;
