import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../state/slices/userSlice";

const UserInfo = () => {
  const name = useSelector((state) => state.user.name);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(changeName(inputValue));

    setInputValue("");
  }

  return (
    <>
      <div>Hello - {name}</div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button type="submit">Change Name</button>
      </form>
    </>
  );
};

export default UserInfo;
