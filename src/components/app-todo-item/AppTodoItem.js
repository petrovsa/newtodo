import React,{Component} from "react";


import "./AppTodoItem.css";


export default class AppTodoItem extends Component {
state = {
    done: false,
    important: false
};
        onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done: !done
                };
            });
        };
    onMarkImportant = () => {
      this.setState(({important}) => {
          return {
              important: !important
          };
      });
    };

    render() {
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;
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
                onClick={this.onLabelClick}
            >
                {label}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}
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
