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
    console.log(newTodoList);
    newTodoList = [newTask, ...this.state.todoList];
    this.setState({ todoList: newTodoList });
    console.log(newTodoList);
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
    console.log("favorite", task);
    if (!task.done) {
      debugger;
      let newList = [...this.state.todoList];
      const index = newList.indexOf(task);
      newList[index] = { ...newList[index] };
      newList[index].favorite = !newList[index].favorite;
      let favList = newList
        .filter((task) => task.favorite)
        .sort((a, b) => a.createdAt - b.createdAt);
      let notFavList = newList
        .filter((task) => !task.favorite)
        .sort((a, b) => a.createdAt - b.createdAt);
      const sortedList = [...favList, ...notFavList];
      this.setState({ todoList: sortedList });
    } else if (task.done) {
      debugger;
      let newList = [...this.state.doneList];
      const index = newList.indexOf(task);
      newList[index] = { ...newList[index] };
      newList[index].favorite = !newList[index].favorite;
      let favList = newList.filter((task) => task.favorite);
      let notFavList = newList.filter((task) => !task.favorite);
      favList = favList.sort((a, b) => a.createdAt - b.createdAt);
      console.log("fav", favList);
      notFavList = notFavList.sort((a, b) => a.createdAt - b.createdAt);
      console.log("nofav", notFavList);
      newList = [...favList, ...notFavList];
      console.log("new", newList);
      this.setState({ doneList: newList });
    }
  }

  render() {
    return (
      <React.Fragment>
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}> </AddBar>{" "}
        <List
          list={this.state.todoList}
          onMove={(task) => this.handleMove(task)}
          onDelete={(task) => this.handleDelete(task)}
          onFavorite={(task) => this.handleFavorite(task)}
        ></List>{" "}
        <List
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
