import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {

    constructor(props){
        super(props);
    }

    render() {

        // let renderNumbers = this.props.numbers.map((number)=><h5>{number}</h5>)

        let name = this.props.showName?<strong>{this.props.data.name}</strong>:"";

        return (
            <div className="todo-list-container">
                <strong>{name}</strong>
                <p>{this.props.data.age}</p>
            </div>
        );
    }
}

export default TodoList;