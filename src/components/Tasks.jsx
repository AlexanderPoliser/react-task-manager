import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskDel, TaskInfo }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDel={handleTaskDel}
          TaskInfo={(TaskInfo, task)}
        />
      ))}
    </>
  );
};

export default Tasks;
