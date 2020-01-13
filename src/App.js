import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todo = [
  {
    task: "",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo
    };
  }

  addTodo = todoName => {
    console.log(todoName);
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  handleComplete =() => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList todo={this.state.todo} handleComplete={this.handleComplete} />
     </div>
    );
  }
}

export default App;
