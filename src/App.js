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
    const newTodoList = [newTask, ...this.state.todoList];
    this.setState({ todoList: newTodoList });
  }

  handleMove(task) {
    let sourceList = [];
    let destList = [];

    if (!task.done) {
      sourceList = [...this.state.todoList];
      destList = [...this.state.doneList];
    } else {
      sourceList = [...this.state.doneList];
      destList = [...this.state.todoList];
    }
    const index = sourceList.indexOf(task);
    sourceList[index].done = !sourceList[index].done;
    destList = [sourceList[index], ...destList];
    sourceList.splice(index, 1);
    if (task.done) {
      this.setState({ todoList: sourceList, doneList: destList });
    } else {
      this.setState({ todoList: destList, doneList: sourceList });
    }
  }

  handleDelete(task) {
    let newList = [];
    if (!task.done) newList = [...this.state.todoList];
    else newList = [...this.state.doneList];
    const index = newList.indexOf(task);
    newList.splice(index, 1);
    if (!task.done) this.setState({ todoList: newList });
    else this.setState({ doneList: newList });
  }

  render() {
    return (
      <React.Fragment>
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}> </AddBar>{" "}
        <ToDoList
          todoList={this.state.todoList}
          onDone={(task) => this.handleMove(task)}
          onDelete={(task) => this.handleDelete(task)}
        ></ToDoList>{" "}
        <DoneList
          doneList={this.state.doneList}
          onTodo={(task) => this.handleMove(task)}
          onDelete={(task) => this.handleDelete(task)}
        ></DoneList>{" "}
      </React.Fragment>
    );
  }
}

export default App;
