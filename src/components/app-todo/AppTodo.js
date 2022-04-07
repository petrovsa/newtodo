import React from "react";

import AppTodoItem from "../app-todo-item";
import "./AppTodo.css";

const AppTodo = ({todos, onDeleted}) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li
                className="list-group-item"
                key={id}
            >
                <AppTodoItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}/>
            </li>
        );
    });

    return(
        <ul className="list-group todo">
            {elements}
        </ul>
    );
}

export default AppTodo;