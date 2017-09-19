import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onHandleRemove, onHandleToggle }) => {
    const handleToggle = (id) => {
        onHandleToggle(id);
    }
    
    const handleRemove = (id) => {
        const choice = window.confirm('You sure fam?');
        if(choice) {
            onHandleRemove(id);
        }
    }
    
    const renderListItem = (todo) => {
        const style = `text ${todo.isChecked ? 'complete' : ''}`;
        return (
            <div
                className="list-item" 
                key={todo.id}>
                <input 
                    className="todo-checkbox"               
                    type="checkbox" 
                    defaultChecked={todo.isChecked}
                    onChange={() => handleToggle(todo.id)} />
                <span className={style}>{todo.text}</span>
                <span 
                    onClick={() => handleRemove(todo.id)}
                    className="remove">
                    x
                </span>
            </div>
        )
    }

    const renderList = () => todos.map(todo => renderListItem(todo));
    
    return (
        <div className="todo-list">
            { renderList() }
        </div>
    )
};

export default TodoList;