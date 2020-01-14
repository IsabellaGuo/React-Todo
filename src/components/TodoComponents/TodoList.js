// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  console.log(props);
    return (
        <div className="todo-list">
          {props.listItems.map(item => (
            <Todo key={item.id} item={item} handleComplete={props.handleComplete} />
          ))}
          <button className="clear-btn" onClick={props.clearCompleted}>
            Clear Completed
          </button>
        </div>
    );
};

export default TodoList;
