import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        };
    }
    
    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                <input
                  tyle="text"
                  valye={this.state.newTodo}
                  onChange={this.handleChanges}
                  placeholder="Add to do here"

                />
                <button>Add</button>
            </div>
            <button>Clear All</button>
            </form>
        );
    };
};

export default TodoForm;
