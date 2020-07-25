import React, { Component } from "react";
import "./App.css";
import AddBar from "./components/addBar";
import List from "./components/list";
import ResetButton from "./components/resetButton";

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
    else if (list === this.state.doneList)
      this.setState({ doneList: sortedList });
  }

  handleReset(list) {
    console.log("reset");
    let newList = [...list];
    newList = [];
    if (list === this.state.todoList) this.setState({ todoList: newList });
    else if (list === this.state.doneList) this.setState({ doneList: newList });
  }

  render() {
    const { todoList, doneList } = this.state;
    return (
      <React.Fragment>
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}> </AddBar>{" "}
        {todoList.length > 0 && (
          <ResetButton
            onReset={() => this.handleReset(todoList)}
            label="Reset Todo List"
          ></ResetButton>
        )}
        <List
          type="To do"
          list={todoList}
          onMove={(task) => this.handleMove(task, todoList, doneList)}
          onDelete={(task) => this.handleDelete(task, todoList)}
          onFavorite={(task) => this.handleFavorite(task, todoList)}
        ></List>{" "}
        {doneList.length > 0 && (
          <ResetButton
            onReset={() => this.handleReset(doneList)}
            label="Reset Done List"
          ></ResetButton>
        )}
        <List
          type="Done"
          list={this.state.doneList}
          onMove={(task) =>
            this.handleMove(task, this.state.doneList, todoList)
          }
          onDelete={(task) => this.handleDelete(task, doneList)}
          onFavorite={(task) => this.handleFavorite(task, doneList)}
        ></List>{" "}
      </React.Fragment>
    );
  }
}

export default App;
