import React, {useState, useEffect, useRef} from "react";

function TaskList () {
  const [tasks, setTask]=useState([])
  const taskInputRef = useRef(null);

  useEffect(()=>{
    const savedTasks = useRef(null);
  })

  const addTask = (newTask)=>{
setTask([...tasks, newTask]);
  };
  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = event.target.elements.task.value;
    console.log(newTask)
if (newTask){
  addTask(newTask);
  event.target.task.value = '';
  }
  };
  return (
    <div>
      <h2>Список завдань</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <form onSubmit={handleAddTask}>
        <input type="text" name="task" placeholder="Введіть завдання" />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
}

export default TaskList;
