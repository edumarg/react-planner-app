import React, { Component } from "react";
import "./App.css";
import AddBar from "./components/addBar";
import ToDoList from "./components/toDoList";
import DoneList from "./components/DoneList";

const now = Date.now();
const now1 = now + 100000;
const now2 = now1 - 200000;

const mockTodoList = [];

const mockDoneList = [
  {
    task: "TV",
    done: true,
    createdAt: new Date(now),
    favorite: false,
  },
  {
    task: "Walk",
    done: true,
    createdAt: new Date(now1),
    favorite: true,
  },
  {
    task: "Spleed",
    done: true,
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

  handleMoveToDone(task) {
    let newTodoList = [...this.state.todoList];
    let newDoneList = [...this.state.doneList];
    const index = newTodoList.indexOf(task);
    newTodoList[index].done = !newTodoList[index].done;
    newDoneList = [newTodoList[index], ...newDoneList];
    newTodoList.splice(index, 1);
    this.setState({ todoList: newTodoList, doneList: newDoneList });
  }

  handleMoveToTodo(task) {
    let newTodoList = [...this.state.todoList];
    let newDoneList = [...this.state.doneList];
    const index = newDoneList.indexOf(task);
    newDoneList[index].done = !newDoneList[index].done;
    newTodoList = [newDoneList[index], ...newTodoList];
    newDoneList.splice(index, 1);
    this.setState({ todoList: newTodoList, doneList: newDoneList });
  }

  render() {
    return (
      <React.Fragment>
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}> </AddBar>
        <ToDoList
          todoList={this.state.todoList}
          onDone={(task) => this.handleMoveToDone(task)}
        ></ToDoList>
        <DoneList
          doneList={this.state.doneList}
          onTodo={(task) => this.handleMoveToTodo(task)}
        ></DoneList>
      </React.Fragment>
    );
  }
}

export default App;
