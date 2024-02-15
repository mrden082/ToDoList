import React from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TasksListProps {
  tasks: Task[];
  onDeleteTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

const TasksList: React.FC<TasksListProps> = ({
  tasks,
  onDeleteTask,
  onToggleTask,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
          }}
        >
          <p className="text">{task.text}</p>
          <div className="blok_buttons">
          <button onClick={() => onDeleteTask(task.id)}>Удалить</button>
          <button onClick={() => onToggleTask(task.id)}>
            {task.completed ? 'Отмена' : 'Завершено'}
          </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
