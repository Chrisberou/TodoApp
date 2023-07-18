import React, { Component, createContext } from "react";

export const TodoContext = createContext();

class TodoContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{name:'do something'}],
    };
  }

  createTodo() {}

  readTodo() {}

  updateTodo() {}

  deleteTodo() {}
  

  render() {
    return(
    <TodoContext.Provider
      value={{
        ...this.state,
        createTodo: this.createTodo.bind(this),
        updateTodoTodo: this.updateTodo.bind(this),
        deleteTodo: this.deleteTodo.bind(this),
        readTodo: this.readTodo.bind(this),
      }}
    >
      {this.props.children}
    </TodoContext.Provider>
    )
  }
}

export default TodoContextProvider;

