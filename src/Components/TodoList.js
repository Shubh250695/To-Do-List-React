import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './component.css';

class TodoList extends Component {

  render () {
    return (  
      <div>
        {this.props.items.map ( item => (
          <TodoItem
            id = {item.id}
            status = {item.status}
            task = {item.task}
            description = {item.description}
            duedate = {item.duedate}
            deleteItem = {this.props.deleteItem}
            markItemComplete = {this.props.markItemComplete}
          />
        ))} 
      </div>   
    );
  } 
}

export default TodoList;