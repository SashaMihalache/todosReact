import React, { Component } from 'react';
import './TodoForm.css';
import Loading from '../Loading/Loading';

class TodoForm extends Component {
    state = {
        todo: '',
        isLoading: false
    }

    onSubmit = (e) => {
        e.preventDefault();
        const todo = this.state.todo;
        this.setState({ isLoading: true })

        setTimeout(() => {
            this.setState({ 
                todo: '',
                isLoading: false 
            });
            this.props.onHandleAdd(todo);
        }, 1000);
        
    }

    onValueChange = (e) => {
        this.setState({ todo: e.target.value });
    }

    render() {
        const { isLoading } = this.state;

        return (
            <form className="todo-form">
                <input
                    disabled={this.state.isLoading}
                    type="text"
                    value={this.state.todo}
                    onChange={this.onValueChange} />
                <button
                    disabled={!this.state.todo.length}
                    onClick={this.onSubmit}>
                    { isLoading ? <Loading /> : 'Add' }
                </button>
            </form>
        );
    }
}

export default TodoForm;