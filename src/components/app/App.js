import React, {Component} from "react";
import AppHeader from "../app-header";
import AppSearch from "../app-search";
import ItemStatusFilter from "../item-status-filter";
import AppTodo from "../app-todo";
import ItemAddForm from "../item-add-form";
import "./App.css";

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink Cofee'),
            this.createTodoItem('Create Awesome React App'),
            this.createTodoItem('Finish my Work')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.maxId++
        }
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
             return {
                 todoData: this.toggleProperty(todoData, id, 'done')
             }
        });
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newItemArray = [...todoData, newItem];
            return({
                todoData: newItemArray
            });
        });
    }

    toggleProperty = (arr, id, propertyName) => {
            const oldItemIndex = arr.findIndex((el) => el.id === id);
            const oldItem = arr[oldItemIndex];
            const newItem = {...oldItem, [propertyName]: !oldItem[propertyName]};
            return [...arr.slice(0,oldItemIndex), newItem, ...arr.slice(oldItemIndex+1)]
}

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
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <AppSearch />
                    <ItemStatusFilter />
                </div>
                <AppTodo
                    todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        );
    }
}