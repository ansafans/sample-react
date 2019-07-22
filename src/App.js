import React, { Component } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate/TodoCreate';
import TodoList from './components/TodoList/TodoList';

class App extends Component {

  buttonClicked(message){
    console.log(message);
  }

  render() {
    return (
      <div className="App">
        <TodoCreate className="sample-class" bar={this.buttonClicked.bind(this)}/>
        <TodoList data={{name:"John",age:100}} showName={false}/>
        <TodoList data={{name:"John Smith",age:60}} showName={true}/>
      </div>
    );
  }
}

export default App;