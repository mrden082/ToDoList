import React, { useState } from 'react';
import "./App.css";

interface NewTaskProps {
  onAddTask: (newTask: { id: number; text: string; completed: boolean }) => void;
}

const NewTask: React.FC<NewTaskProps> = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newTask = {
      id: new Date().getTime(),
      text: task,
      completed: false,
    };

    onAddTask(newTask);
    setTask('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" className="input" value={task} onChange={handleInputChange} />
      <button type="submit" className="add_task">Добавить задачу</button>
    </form>
  );
};

export default NewTask;
