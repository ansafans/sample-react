import React, { Component } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate/TodoCreate';
import TodoList from './components/TodoList/TodoList';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      todos: todoItems
    }
  }

  onFormSubmitted(formValue){

    todoItems.push({
      title:formValue.todoTitle,
      description:formValue.todoDescription,
      status:formValue.isCompleted
    });

    this.setState({todos:todoItems});
  }

  removeItem(key){
    todoItems.splice(key,1);
    this.setState({todos:todoItems});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 style={{marginTop:10}}>React Todo App</h3>
            <TodoCreate onSave={this.onFormSubmitted.bind(this)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <TodoList items={this.state.todos} onItemRemoved={this.removeItem.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

let todoItems = [
  {
    title:"Task 1",
    description:"sample desc..",
    status:true
  },
  {
    title:"Task 2",
    description:"sample desc..",
    status:false
  },
  {
    title:"Task 3",
    description:"sample desc..",
    status:true
  },
];

export default App;