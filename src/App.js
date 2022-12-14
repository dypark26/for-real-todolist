import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./pages/TodoList";

function App() {
  const initialtodo = [
    {
      id: "1",
      title: "사실은말이조",
      content: "real 입니다만",
      isDone: false,
    },
    {
      id: "2",
      title: "오실은말이조",
      content: "real 아닙니다만",
      isDone: true,
    },
    {
      id: "3",
      title: "육실은말이조",
      content: "real 아닙니다만",
      isDone: true,
    },
  ];

  const [todolist, setTodolist] = useState(initialtodo);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      title: title,
      content: content,
      isDone: false,
    };

    // setTodolist((prev) => {
    //   return [...prev, newTodo];
    // });
    setTodolist([...todolist, newTodo]);

    setTitle("");
    setContent("");
  };

  const deleteButton = (todoId) => {
    setTodolist(
      todolist.filter(todo => todo.id !== todoId)
    )
  }

  // console.log(todolist)z;

  return (
    <>
      <div>Todolist</div>
      <form onSubmit={(event) => addTodo(event)}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>추가해랏!</button>
      </form>
      <div>
        <TodoList todolist={todolist} deleteButton={deleteButton}></TodoList>
      </div>
    </>
  );
}
export default App;
