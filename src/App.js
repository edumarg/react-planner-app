import React, { Component } from "react";
import "./App.css";
import AddBar from "./components/addBar";
import ToDoList from "./components/toDoList";
import DoneList from "./components/DoneList";

const now = Date.now();
const now1 = now + 100000;
const now2 = now1 - 200000;
const now3 = now1 + 300000;

const mockTodoList = [];

const mockDoneList = [
  {
    task: "TV",
    done: true,
    createdAt: new Date(now),
    favorite: false,
  },
  {
    task: "Eat",
    done: true,
    createdAt: new Date(now),
    favorite: true,
  },
  {
    task: "swimm",
    done: true,
    createdAt: new Date(now1),
    favorite: false,
  },
  {
    task: "Walk",
    done: true,
    createdAt: new Date(now1),
    favorite: true,
  },
  {
    task: "Sleep",
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
      let newTodoList = [...this.state.doneList];
      const index = newTodoList.indexOf(task);
      newTodoList.splice(index, 1);
      this.setState({
        doneList: newTodoList,
      });
    }
  }

  handleFavorite(task) {
    console.log("favorite", task);
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

  render() {
    return (
      <React.Fragment>
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}> </AddBar>{" "}
        <ToDoList
          todoList={this.state.todoList}
          onDone={(task) => this.handleMove(task)}
          onDelete={(task) => this.handleDelete(task)}
          onFavorite={(task) => this.handleFavorite(task)}
        ></ToDoList>{" "}
        <DoneList
          doneList={this.state.doneList}
          onTodo={(task) => this.handleMove(task)}
          onDelete={(task) => this.handleDelete(task)}
          onFavorite={(task) => this.handleFavorite(task)}
        ></DoneList>{" "}
      </React.Fragment>
    );
  }
}

export default App;
