import React, { Component } from "react";
import "./App.css";
import AddBar from "./components/addBar";
import List from "./components/list";

const mockTodoList = [];
const mockDoneList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: mockTodoList,
      doneList: mockDoneList,
    };
  }

  handleNewTask(newTask) {
    let newTodoList = [...this.state.todoList];
    newTodoList = [newTask, ...this.state.todoList];
    this.setState({ todoList: newTodoList });
  }

  handleMove(task, source, dest) {
    let newSource = [...source];
    let newDest = [...dest];
    const index = newSource.indexOf(task);
    newSource[index].done = !newSource[index].done;
    newDest = [newSource[index], ...dest];
    newSource.splice(index, 1);
    if (source === this.state.todoList) {
      this.setState({ todoList: newSource, doneList: newDest });
    } else if (source === this.state.doneList) {
      this.setState({ todoList: newDest, doneList: newSource });
    }
  }

  handleDelete(task, list) {
    let newList = [...list];
    const index = newList.indexOf(task);
    newList.splice(index, 1);
    if (list === this.state.todoList) this.setState({ todoList: newList });
    else if (list === this.state.doneList) this.setState({ doneList: newList });
  }

  handleFavorite(task, list) {
    const newList = [...list];
    const index = newList.indexOf(task);
    newList[index] = { ...newList[index] };
    newList[index].favorite = !newList[index].favorite;
    const favList = newList
      .filter((task) => task.favorite)
      .sort((a, b) => a.createdAt - b.createdAt);
    const notFavList = newList
      .filter((task) => !task.favorite)
      .sort((a, b) => a.createAt - b.createAt);
    let sortedList = [...favList, ...notFavList];
    if (list === this.state.todoList) this.setState({ todoList: sortedList });
    if (list === this.state.doneList) this.setState({ doneList: sortedList });
  }

  render() {
    return (
      <React.Fragment>
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}> </AddBar>{" "}
        <List
          type="To do"
          list={this.state.todoList}
          onMove={(task) =>
            this.handleMove(task, this.state.todoList, this.state.doneList)
          }
          onDelete={(task) => this.handleDelete(task, this.state.todoList)}
          onFavorite={(task) => this.handleFavorite(task, this.state.todoList)}
        ></List>{" "}
        <List
          type="Done"
          list={this.state.doneList}
          onMove={(task) =>
            this.handleMove(task, this.state.doneList, this.state.todoList)
          }
          onDelete={(task) => this.handleDelete(task, this.state.doneList)}
          onFavorite={(task) => this.handleFavorite(task, this.state.doneList)}
        ></List>{" "}
      </React.Fragment>
    );
  }
}

export default App;
