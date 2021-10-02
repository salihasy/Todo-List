import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    

    return (
      <div className="todo-container">
        <ul className="todo-list">
        {
          props.todos.map((todo) =>
             (<Todo setTodos={props.setTodos} todos={props.todos} key={todo.id} text={todo.text} todo={todo} />
            ))
        }
        </ul>
      </div>
    );
}

export default TodoList;