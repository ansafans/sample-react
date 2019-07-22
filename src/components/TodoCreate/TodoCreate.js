import React from 'react';
import TodoList from '../TodoList/TodoList';
import './TodoCreate.css';

export default class TodoCreate extends React.Component{

    constructor(props){
        super(props);
    }

    onButtonClick(){
        // console.log("todo create 'Click Me' button clicked");
        this.props.bar("Todo create button clicked");
    }

    render(){
        return (
            <div className="todo-create-container">
                Hello I am todo create.
                <br/>
                <button onClick={this.onButtonClick.bind(this)}>Click Me</button>
            </div>
        )
    }
}