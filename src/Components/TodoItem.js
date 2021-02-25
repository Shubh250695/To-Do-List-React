import React, { Component } from 'react';
import './component.css';

class TodoItem extends Component {
  constructor () {
    super ();
        
    this.onMarkItemComplete = ( event ) => {
      this.props.markItemComplete ( this.props.id )
    }
        
    this.onDeleteItem = ( event ) => {
      this.props.deleteItem ( this.props.id )
    }  
  } 

  render () {
    const itemClass = "isItemCompleted-" + ( this.props.status ? "done" : "undone" );
     
    return (
      <div className = "container-fluid">
        <div className = "item">
        
          <input type = "checkbox" onChange = {this.onMarkItemComplete} />
          <span id = "taskHeading" className = {itemClass}> {this.props.task} </span>
          <span id = "dueTime" style = {{float: 'right', position: 'relative'}}>Due date : {this.props.duedate}</span>
          <div></div>
          <span> {this.props.description} </span>
          <button
            style = {{float: 'right', position: 'relative'}}
            type = "button" className = "btn btn-danger btn-sm"
            onClick = {this.onDeleteItem}>x
          </button>
        
        </div>
      </div>
    );
  }   
}

export default TodoItem;