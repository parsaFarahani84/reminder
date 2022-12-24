import "./App.css";
import React, { useReducer } from "react";
import style from "./todos.module.css";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
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
      return todo;
    });
  }
  if (actoin.type === "DELETE") {
    return state.filter((todo) => todo.id !== actoin.id);
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, data);

  const completeFunc = function (id) {
    dispatch({ type: "DONE", id: id });
  };
  const deleteFunc = function (id) {
    dispatch({ type: "DELETE", id: id });
  };

  return (
    <>
      <div className={style.main}>
        <form>
          <div>
            <input type="text" placeHolder="Add a todo..." />
            <button>go</button>
          </div>
        </form>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={!todo.complete ? style.mother : style.complete}
          >
            <div className={style.childTodo}>
              <h3>{todo.title}</h3>
              <div className={style.icons}>
                {!todo.complete ? (
                  <MdCheckBoxOutlineBlank
                    className={style.icon}
                    onClick={() => completeFunc(todo.id)}
                  />
                ) : (
                  <MdCheckBox
                    className={style.icon}
                    onClick={() => completeFunc(todo.id)}
                  />
                )}
                <FaTrash
                  className={style.icon}
                  onClick={() => deleteFunc(todo.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
