import React,{Component} from "react";


import "./AppTodoItem.css";


export default class AppTodoItem extends Component {
    render() {
        const {
            label,
            onDeleted,
            onToggleDone,
            onToggleImportant,
            important,
            done
        } = this.props;
        let classNames = "list-item";
        if (done) {
            classNames += " done";
        }
        if (important) {
            classNames += " important";
        }

        return (
            <span className={classNames}>
            <span
                className="list-item-label"
                onClick={onToggleDone}
            >
                {label}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}
            >

                <i className="fas fa-exclamation" />
            </button>

    <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
    >

                <i className="fa-solid fa-trash-can" />
            </button>
        </span>
        );
    }
}
