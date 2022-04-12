import React, {Component} from "react";

import "./ItemAddForm.css";

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }
    onChangeLabel = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
    }
render() {
    const {onItemAdded} = this.props;
    return (
        <form
            className="item-add-form d-flex"
        onSubmit={this.onSubmit}>
        <input
            className="form-control"
            type="text"
            placeholder="input text"
            onChange={this.onChangeLabel}
        />
            <button
                className="btn btn-outline-secondary"
            >
                Add Item
            </button>
    </form>);
}
}