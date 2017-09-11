import React, { Component } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFactory from './helpers/todoFactory';

class App extends Component {
  state = {
    todos: [
      {id: 1, text: "Learn React", isChecked: true },
      {id: 2, text: "Learn React-Native", isChecked: false },
      {id: 3, text: "Learn Redux", isChecked: false }
    ]
  }
  
  onAddTodo = (todo) => {
    const newTodo = TodoFactory(todo);
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  onHandleRemove =(id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <TodoForm onAddTodo={this.onAddTodo} />
        <TodoList 
          todos={this.state.todos} 
          onHandleRemove={this.onHandleRemove}/>
      </div>
    );
  }  
}

export default App;
