import React, { Component } from 'react';
import Header from './components/Header/Header';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { mockData, TodoCreator } from './helpers/todoFactory';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ todos: mockData() })
    }, 1000);
  }
  
  
  onHandleAdd = (todo) => {
    const newTodo = TodoCreator(todo);
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  onHandleRemove = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  onHandleToggle = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => (
        (todo.id === id)
        ? { ...todo, isChecked: !todo.isChecked } 
        : todo
    ))
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <TodoForm onHandleAdd={this.onHandleAdd} />
        <TodoList 
          todos={this.state.todos} 
          onHandleRemove={this.onHandleRemove}
          onHandleToggle={this.onHandleToggle} />
      </div>
    );
  }  
}

export default App;
