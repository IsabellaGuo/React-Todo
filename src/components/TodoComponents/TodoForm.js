import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: "",
            completed: false
        };
    }

    handleChanges = e => {
        this.setState({ newItem: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("This is the handleSubmit");
        this.props.addItem(this.state.newItem);
        this.setState({
            newItem: ""
        });
    };  


    render() {
        console.log("Rendering form");
        return (
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="item"
                value={this.state.newItem}
                onChange={this.handleChanges}
                
              />
              <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;
