import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

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
  ];
  // 투두리스트 생성
  const [todolist, setTodolist] = useState(initialtodo);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 추가기능 구현
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
        {todolist.map((todo) => {
          return (
            <div key={todo.id}>
              <div>{todo.title}</div>
              <div>{todo.content}</div>
              <button>삭제</button>
              <button>완료</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
