import React from "react";
import "./App.css";
import AddBar from "./components/addBar";
import ToDoList from "./components/toDoList";

function App() {
  return (
    <React.Fragment>
      <AddBar> </AddBar>
      <ToDoList></ToDoList>
    </React.Fragment>
  );
}

export default App;
