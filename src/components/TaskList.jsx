import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../state/slices/tasksSlice";

function Task({ task }) {
  const dispatch = useDispatch();

  function handleCheckboxChange() {
    dispatch(toggleTask(task.id));
  }

  function handleDelete() {
    dispatch(deleteTask(task.id));
  }

  return (
    <li>
      {task.task}
      <div>
        <input
          onChange={handleCheckboxChange}
          type="checkbox"
          checked={task.completed}
        />
        <button onClick={handleDelete}>X</button>
      </div>
    </li>
  );
}

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.data);

  const renderTasks = tasks.map((task, i) => {
    return <Task task={task} key={i} />;
  });

  return (
    <div>
      <ul>{renderTasks}</ul>
    </div>
  );
};

export default TaskList;
