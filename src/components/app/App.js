import React, {Component} from "react";
import AppHeader from "../app-header";
import AppSearch from "../app-search";
import ItemStatusFilter from "../item-status-filter";
import AppTodo from "../app-todo";
import "./App.css";

export default class App extends Component {
    state = {
        todoData: [
            {id: 1, label: 'Drink Cofee', important: false},
            {id: 2, label: 'Create Awesome React App', important: true},
            {id: 3, label: 'Finish my Work', important: false},
        ]
    };

    deleteItem = (id) => {
this.setState(({todoData}) => {
    const newArray = todoData.filter((el) =>
        el.id !== id
    );
    return {
        todoData: newArray
    }
})

    };

    render() {
        return (
            <div className="app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <AppSearch />
                    <ItemStatusFilter />
                </div>
                <AppTodo
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
            </div>
        );
    }
}