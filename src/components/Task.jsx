import React from "react";

import { CgClose } from "react-icons/cg";

import { BsInfoCircle } from "react-icons/bs";

import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDel, TaskInfo }) => {
  const history = useHistory();

  const handleTaskInfoClick = () => {
    history.push(`/${task.title}`);
  };
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid steelblue" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="buttons-container">
        <button className="info-task-button" onClick={handleTaskInfoClick}>
          <BsInfoCircle />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTaskDel(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
