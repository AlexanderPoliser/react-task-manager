import React, { useState } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Tasks from "./components/Tasks";

import AddTask from "./components/AddTask";

import Header from "./components/Header";

import TaskInfo from "./components/TaskInfo";

import "./App.css";

import axios from "axios";

import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react/cjs/react.development";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Lorem ipsum dolor sit amet, consectetur.",
      completed: false,
    },
    {
      id: "2",
      title: "Lorem ipsum dolor sit amet, consectetur.",
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=5"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };
  const handleTaskDel = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAdd={handleTaskAdd} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDel={handleTaskDel}
                TaskInfo={TaskInfo}
              />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskInfo} />
      </div>
    </Router>
  );
};
export default App;
