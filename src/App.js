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

  handleMove(task) {
    if (!task.done) {
      let newTodoList = [...this.state.todoList];
      let newDoneList = [...this.state.doneList];
      const index = newTodoList.indexOf(task);
      newTodoList[index].done = !newTodoList[index].done;
      newDoneList = [newTodoList[index], ...newDoneList];
      newTodoList.splice(index, 1);
      this.setState({ todoList: newTodoList, doneList: newDoneList });
    } else if (task.done) {
      let newTodoList = [...this.state.todoList];
      let newDoneList = [...this.state.doneList];
      const index = newDoneList.indexOf(task);
      newDoneList[index].done = !newDoneList[index].done;
      newTodoList = [newDoneList[index], ...newTodoList];
      newDoneList.splice(index, 1);
      this.setState({ todoList: newTodoList, doneList: newDoneList });
    }
  }

  handleDelete(task) {
    if (!task.done) {
      let newTodoList = [...this.state.todoList];
      const index = newTodoList.indexOf(task);
      newTodoList.splice(index, 1);
      this.setState({
        todoList: newTodoList,
      });
    } else if (task.done) {
      let newDoneList = [...this.state.doneList];
      const index = newDoneList.indexOf(task);
      newDoneList.splice(index, 1);
      this.setState({
        doneList: newDoneList,
      });
    }
  }

  handleFavorite(task) {
    if (!task.done) {
      const newList = [...this.state.todoList];
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
      this.setState({ todoList: sortedList });
    } else if (task.done) {
      const newList = [...this.state.doneList];
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
      this.setState({ doneList: sortedList });
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}> </AddBar>{" "}
        <List
          type="To do"
          list={this.state.todoList}
          onMove={(task) => this.handleMove(task)}
          onDelete={(task) => this.handleDelete(task)}
          onFavorite={(task) => this.handleFavorite(task)}
        ></List>{" "}
        <List
          type="Done"
          list={this.state.doneList}
          onMove={(task) => this.handleMove(task)}
          onDelete={(task) => this.handleDelete(task)}
          onFavorite={(task) => this.handleFavorite(task)}
        ></List>{" "}
      </React.Fragment>
    );
  }
}

export default App;
