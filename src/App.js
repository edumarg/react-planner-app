import React, { Component } from "react";
import "./App.css";
import AddBar from "./components/addBar";
import ToDoList from "./components/toDoList";
import DoneList from "./components/DoneList";

const now = Date.now();
const now1 = now + 100000;
const now2 = now1 - 200000;

const mockTodoList = [
  {
    task: "Read",
    done: false,
    createdAt: new Date(now),
    favorite: false,
  },
  {
    task: "Eat",
    done: false,
    createdAt: new Date(now1),
    favorite: false,
  },
  {
    task: "Code",
    done: false,
    createdAt: new Date(now2),
    favorite: false,
  },
];

console.log(mockTodoList);
const mockDoneList = [
  {
    task: "TV",
    done: false,
    createdAt: new Date(now),
    favorite: false,
  },
  {
    task: "Walk",
    done: false,
    createdAt: new Date(now1),
    favorite: false,
  },
  {
    task: "Spleed",
    done: false,
    createdAt: new Date(now2),
    favorite: false,
  },
];
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
