import Todo from "./Todo";

export default function TodoList({ todolist, deleteButton }) {
    return (
        <main>
            <h1>안한거</h1>
            {todolist.map((todo) => {
                if (!todo.isDone) {
                    return (
                        <Todo key={todo.id} todo={todo} deleteButton={deleteButton}/>
                    );
                }
            })}
            <hr/>
            <h1>한거</h1>
            {todolist.map((todo) => {
                if (todo.isDone) {
                    return (
                        <Todo  key={todo.id} todo={todo} deleteButton={deleteButton}/>
                    );
                }
            })}
        </main>
    );
}
