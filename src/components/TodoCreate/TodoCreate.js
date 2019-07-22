import React from 'react';
import TodoList from '../TodoList/TodoList';
import './TodoCreate.css';

export default class TodoCreate extends React.Component{

    constructor(props){
        super(props);

        this.state={
            todoTitle:"",
            todoDescription:"",
            isCompleted:false
        }
    }
    
    // simpleFunction(value){
    //     console.log(value);
    // }

    // object={
    //     simpleFunction1 : (value)=>{ console.log(value); }
    // }

    formSubmit(e){
        e.preventDefault();
        this.props.onSave(this.state);
    }

    render(){
        return (
            <div className="todo-form-container">
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.formSubmit.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="todoTitle">Todo Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="todoTitle" 
                                    placeholder="Enter todo title"
                                    value={this.state.todoTitle} 
                                    onChange={(e)=>{this.setState({todoTitle:e.target.value})}}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="todoDescription">Todo Description</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="todoDescription" 
                                    value={this.state.todoDescription}
                                    placeholder="Enter todo description" 
                                    onChange={(e)=>{this.setState({todoDescription:e.target.value})}}
                                />
                            </div>
                            <div className="form-group form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    value={this.state.isCompleted}
                                    id="todoCompleted" 
                                    onChange={(e)=>{this.setState({isCompleted:!this.state.isCompleted})}}
                                 />
                                <label className="form-check-label" htmlFor="todoCompleted">Is completed?</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}