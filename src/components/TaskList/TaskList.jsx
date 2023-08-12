import React, { useState, useEffect, useRef } from "react";
import styles from "./TaskList.module.css";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskToBeRemoved, setTaskToBeRemoved] = useState(null);
  const taskInputRef = useRef(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (taskToBeRemoved !== null) {
      const timer = setTimeout(() => {
        removeTask(taskToBeRemoved);
        setTaskToBeRemoved(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [taskToBeRemoved]);

  function addTask(newTask) {
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);

    if (updatedTasks[index].completed) {
      setTimeout(() => {
        setTaskToBeRemoved(index);
      }, 1000);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = taskInputRef.current.value;
    if (newTask) {
      addTask(newTask);
      taskInputRef.current.value = "";
    }
  };

  return (
    <div className={styles.taskListContainer}>
      <h2 className={styles.taskListTitle}>Список завдань</h2>
      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`${styles.taskItem} ${
              taskToBeRemoved === index ? styles.removing : ""
            }`}
          >
            <input
            className={`${styles.taskCheck}`}
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            <span
              className={task.completed ? styles.completedTask : undefined}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          ref={taskInputRef}
          placeholder="Введіть завдання"
          className={styles.taskInput}
        />
        <button type="submit" className={styles.taskButton}>
          Додати
        </button>
      </form>
    </div>
  );
}

export default TaskList;
