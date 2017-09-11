import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onHandleRemove }) => {
    const handleRemove = (id) => {
        const choice = window.confirm('You sure fam?');
        if(choice) {
            onHandleRemove(id);
        }
    }

    const renderListItem = (todo) => {
        return (
            <div className="list-item" key={todo.id}>
                <input 
                    className="todo-checkbox"               
                    type="checkbox" 
                    defaultChecked={todo.isChecked} />
                <span className="text">{todo.text}</span>
                <span 
                    onClick={() => handleRemove(todo.id)}
                    className="remove">x</span>
            </div>
        )
    }
    
    return (
        <div className="todo-list">
            { todos.map(todo => renderListItem(todo)) }
        </div>
    )
};

export default TodoList;