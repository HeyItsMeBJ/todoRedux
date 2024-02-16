import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <ul className="w-56 flex flex-col justify-center flex-wrap items-center gap-2 mt-6">
      {todos.map(({ id, text }) => (
        <li
          className="flex justify-center flex-wrap items-center gap-2"
          id={id}
          key={id}
        >
          <input
            className="h-11 px-3 py-3 w-32 bg-gray-200 outline-none"
            value={text}
            onChange={(e)=> dispatch(updateTodo({ id: id, text: e.target.value}))}
            readOnly= {true}
          />
            

          <button
            className="w-7 h-7  bg-red-500 rounded hover:bg-red-300 active:bg-red-500"
            onClick={() => dispatch(removeTodo({ id: id }))}
          >
            x
          </button>
          <button
            className="w-7 h-7  bg-red-500 rounded hover:bg-red-300 active:bg-red-500"
            onClick={() => {
              const tododiv = document.getElementById(id).childNodes[0];
              tododiv.classList.toggle("rounded-lg");
              tododiv.classList.toggle("border-2");
              tododiv.classList.toggle("border-black");
              tododiv.classList.toggle("border-solid");
              tododiv.readOnly = !tododiv.readOnly;
            }}
          >
            UP
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
