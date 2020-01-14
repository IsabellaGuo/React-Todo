import React from 'react';

const Todo = props => {
    return (
        <div
         id={props.item.id}
         className={`todo${props.item.completed ? '-completed' : ''}`}
         onClick={props.handleComplete}
         style={{ textDecoration: props.item.completed ? 'line-through' : 'none' }}
        >
            {props.item.task}
        </div>
    );
}

export default Todo;