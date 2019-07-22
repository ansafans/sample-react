import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {

    constructor(props){
        super(props);
    }

    itemRemoved(itemKey){
        this.props.onItemRemoved(itemKey);
    }

    render() {

        let rows = this.props.items.map((item,key)=>(
            <tr key={key}>
                <th  scope="row">{key+1}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.status?"Completed":"Not Completed"}</td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={this.itemRemoved.bind(this,key)}>Remove</button>
                </td>
            </tr>
        ));

        return (
            <div className="todo-list-container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;