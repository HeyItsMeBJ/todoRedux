import React, { useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";
function MakeTodo() {
  const [value, setVlaue] = useState("");
  const dispatch = useDispatch();
  const addTodoInList = () => {
    if (value) {
      dispatch(addTodo({ text: value }));
      setVlaue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Your Todo"
        className="border-2 border-solid rounded-md border-gray-700"
        value={value}
        onChange={(e) => setVlaue(e.target.value)}
      />
      <button
        type="submit"
        className="border-2 border-solid rounded-md border-gray-700"
        onClick={addTodoInList}
      >
        submit
      </button>
    </div>
  );
}

export default MakeTodo;
