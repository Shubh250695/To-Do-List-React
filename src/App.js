import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor () {
    super ();
        
    this.state = {
      work: "",
      describe: "",
      deadline: "",
      items: []
    }
        
    this.handleInput = ( event ) => { this.setState ({ work:event.target.value }) }

    this.handleChange = ( event ) => { this.setState ({ describe:event.target.value }) }

    this.handleDeadlineChange = ( event ) => { this.setState ({ deadline:event.target.value }) }
        
    this.handleAddItem = ( event ) => {
      event.preventDefault ();
      if ( this.state.work===""
        && this.state.describe===""
        && this.state.deadline==="" ) return;

      const newItem = {
        id: Date.now (),
        task: this.state.work,
        description: this.state.describe,
        duedate: this.state.deadline,
        status: false
      }

      this.setState( ( prevState ) => ({
        items:prevState.items.concat ( newItem ), work: "", describe: "", deadline: ""
      }))  
    }
        
    this.handleMarkItemComplete = ( itemId ) => {
      const updatedItems = this.state.items.map ( item => {
        if ( itemId === item.id )
        item.status = !item.status;
        return item;
      })
            
      this.setState ({
        items: [].concat ( updatedItems )
      })       
    }
 
    this.handleDeleteItem = ( itemId ) => {
      const updatedItems = this.state.items.filter ( item => {
        return item.id!==itemId    
      })
            
      this.setState ({
        items: [].concat ( updatedItems )
      })
    }
  }
    
  render() {
        
    const btn_style = {
      marginLeft: "10px",
      marginBottom: "5px"
    }
        
    const input_style = {
      width: "250px",
      padding: "5px",
      margin: "5px"
    }
        
    return (
      <div className = "body">

        <h2 className = "heading">TO-DO List</h2> 

        <input
          style = {input_style}
          placeholder = "Add New Task"
          type = "input"
          value = {this.state.work}
          onChange = {this.handleInput}
        />

        <input
          style = {input_style}
          placeholder = "Task Description"
          type = "input"
          value = {this.state.describe}
          onChange = {this.handleChange}
        />

        <input
          name="deadline"
          type="date"
          value={this.state.deadline}
          onChange={this.handleDeadlineChange}
        />

        <button
          style = {btn_style}
          type = "button"
          className = "btn btn-primary btn-md"
          onClick = {this.handleAddItem}>Add
        </button>

        <TodoList
          items = {this.state.items}
          deleteItem = {this.handleDeleteItem}
          markItemComplete = {this.handleMarkItemComplete}
        />

      </div>
    );
  }
}

export default App;