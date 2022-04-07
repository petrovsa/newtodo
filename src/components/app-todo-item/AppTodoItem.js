import React from "react";

import "./AppTodoItem.css";

const AppTodoItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal',
    }

    return (
        <span className="list-item">
            <span
                className="list-item-label"
                style={style}
            >
                {label}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
            >

                <i className="fas fa-exclamation" />
            </button>

    <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
    >

                <i className="fa-solid fa-trash-can" />
            </button>
        </span>
    );
}


export default AppTodoItem;