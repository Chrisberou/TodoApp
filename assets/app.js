import React, { Component } from "react";
import ReactDom from "react-dom/client";
import TodoContextProvider from "./contexts/TodoContext";
import TodoTable from "./components/TodoTable";

class App extends Component {
    
  render() {
    
    return (
      <TodoContextProvider>
        <TodoTable />
      </TodoContextProvider>
    );
  }
}

ReactDom.createRoot(document.getElementById("root")).render(<App />);
