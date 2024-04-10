import './App.css';
import Todo from './Component/Todo.jsx';
import Task from './Component/Task.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks !== null ? storedTasks : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks !== null) {
      setTasks(storedTasks);
    }
  }, []);

  function addTask(name) {
    if (name && name.trim() !== '') {
      setTasks(prev => [...prev, { name: name, done: false }]);
    }
  }

  function removeTask(remove) {
    setTasks(prev => prev.filter((taskObject, index) => index !== remove));
  }

  function deleteAllTasks() {
    setTasks([]);
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  return (
    <main>
      <Todo onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          {...task}
          onTrash={() => removeTask(index)}
          onToggle={done => updateTaskDone(index, done)}
        />
      ))}
      <button className="delete" onClick={deleteAllTasks}>Delete All</button>
    </main>
  );
}

export default App;