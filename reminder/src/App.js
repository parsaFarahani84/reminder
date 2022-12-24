import "./App.css";
import React, { useReducer } from "react";
import style from "./todos.module.css";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
const data = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = function (state, actoin) {
  if (actoin.type === "DONE") {
    return state.map((todo) => {
      if (todo.id === actoin.id) {
        return { ...todo, complete: !todo.complete };
      }
    });
  }
  if (actoin.type === "DELETE") {
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, data);

  const completeFunc = function (id) {
    dispatch({ type: "DONE", id: id });
  };

  return (
    <div className={style.main}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={!todo.complete ? style.mother : style.complete}
        >
          <div className={style.childTodo}>
            <h3>{todo.title}</h3>
            <div className={style.icons}>
              <MdCheckBoxOutlineBlank
                className={style.icon}
                onClick={() => completeFunc(todo.id)}
              />
              <FaTrash className={style.icon} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
