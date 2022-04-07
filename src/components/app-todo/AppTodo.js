import React from "react";

import AppTodoItem from "../AppTodoItem";
import "./AppTodo.css";

const AppTodo = ({todos}) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li className="list-group-item" key={id}>
                <AppTodoItem {...itemProps} />
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