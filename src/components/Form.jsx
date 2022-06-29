import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, markAllAsCompleted } from "../state/slices/tasksSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask(inputVal));
    setInputVal("");
  }

  function handleMarkAll() {
    dispatch(markAllAsCompleted());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputVal} onChange={handleInputChange} type="text" />
        <button type="submit">Add</button>
      </form>
      <br />
      <button onClick={handleMarkAll}>Mark All As Completed</button>
    </div>
  );
};

export default Form;
