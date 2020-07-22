import React, { Component } from "react";
import "./App.css";
import AddBar from "./components/addBar";
import ToDoList from "./components/toDoList";
import DoneList from "./components/DoneList";

const mockTodoList = ["Read a book", "Sleep"];
const mockDoneList = ["TV", "Code", "Buy food"];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: mockTodoList,
      doneList: mockDoneList,
    };
  }

  handleNewTask(newTask) {
    console.log("new task added todoList", newTask);
    const newTodoList = [newTask, ...this.state.todoList];
    this.setState({ todoList: newTodoList });
    console.log("new todo task list", this.state.todoList);
  }

  render() {
    return (
      <React.Fragment>
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}> </AddBar>
        <ToDoList todoList={this.state.todoList}></ToDoList>
        <DoneList doneList={this.state.doneList}></DoneList>
      </React.Fragment>
    );
  }
}

export default App;
