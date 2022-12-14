export default function Todo( {todo, deleteButton}) {
    return (
        <div >
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <button onClick={() => deleteButton(todo.id)}>삭제</button>
            <button>완료</button>
        </div>
    );
}
