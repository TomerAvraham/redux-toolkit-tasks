import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  data: [{ id: v4(), task: "Code something", completed: false }],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: v4(),
        completed: false,
        task: action.payload,
      };
      state.data.push(newTask);
    },
    toggleTask(state, action) {
      const id = action.payload;
      const index = state.data.findIndex((t) => t.id === id);
      state.data[index] = {
        ...state.data[index],
        completed: !state.data[index].completed,
      };
    },
    deleteTask(state, action) {
      const id = action.payload;
      state.data = state.data.filter((t) => t.id !== id);
      if (state.data.length === 0) {
        alert("No Tasks");
      }
    },
    markAllAsCompleted(state) {
      state.data = state.data.map((t) => {
        return { ...t, completed: true };
      });
    },
  },
});

export const { addTask, toggleTask, deleteTask, markAllAsCompleted } =
  tasksSlice.actions;
export default tasksSlice.reducer;
