import React from "react";
import "./App.css";
import AddBar from "./components/addBar";
import ToDoList from "./components/toDoList";
import DoneList from "./components/DoneList";

function App() {
  return (
    <React.Fragment>
      <AddBar> </AddBar>
      <ToDoList></ToDoList>
      <DoneList></DoneList>
    </React.Fragment>
  );
}

export default App;
