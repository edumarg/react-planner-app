import React, { Component } from "react";
import AddBar from "./components/addBar";
import BgAtribute from "./components/bgAttribute";
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
    console.log("new", newTask);
    let newTodoList = [...this.state.todoList];
    newTodoList = [newTask, ...this.state.todoList];
    console.log("new list", newTodoList);
    this.setState({ todoList: newTodoList });
  }

  handleEditedTask(editedTask) {
    console.log("edit", editedTask);
    let newList = [...this.state.todoList];
    const index = newList.indexOf(editedTask);
    editedTask.beingEdited = !editedTask.beingEdited;
    newList[index] = editedTask;
    this.setState({ todoList: newList });
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

  handleEdit(task) {
    console.log("edit", task);
    let newList = [...this.state.todoList];
    const index = newList.indexOf(task);
    newList[index] = { ...newList[index] };
    newList[index].beingEdited = !newList[index].beingEdited;
    this.setState({ todoList: newList });
  }

  handleReset(list) {
    let newList = [...list];
    newList = [];
    if (list === this.state.todoList) this.setState({ todoList: newList });
    else if (list === this.state.doneList) this.setState({ doneList: newList });
  }

  render() {
    const { todoList, doneList } = this.state;
    return (
      <React.Fragment>
        <BgAtribute />
        <AddBar onNewTask={(newTask) => this.handleNewTask(newTask)}>
          {" "}
        </AddBar>{" "}
        <div className="d-flex align-items-center">
          <h3 className="mr-3">To do List..</h3>
          {todoList.length > 0 && (
            <ResetButton
              onReset={() => this.handleReset(todoList)}
              label="Reset Todo List"
            ></ResetButton>
          )}
        </div>
        <List
          type="To do"
          list={todoList}
          onMove={(task) => this.handleMove(task, todoList, doneList)}
          onDelete={(task) => this.handleDelete(task, todoList)}
          onFavorite={(task) => this.handleFavorite(task, todoList)}
          onEdit={(task) => this.handleEdit(task)}
          onEditTask={(task) => this.handleEditedTask(task)}
          onReset={() => this.handleReset(todoList)}
        ></List>{" "}
        {doneList.length > 0 && (
          <React.Fragment>
            <div className="d-flex align-items-center">
              <h3 className="mr-3">Done List..</h3>
              {doneList.length > 0 && (
                <ResetButton
                  onReset={() => this.handleReset(doneList)}
                  label="Reset Todo List"
                ></ResetButton>
              )}
            </div>
            <List
              type="Done"
              list={this.state.doneList}
              onMove={(task) =>
                this.handleMove(task, this.state.doneList, todoList)
              }
              onDelete={(task) => this.handleDelete(task, doneList)}
              onFavorite={(task) => this.handleFavorite(task, doneList)}
            ></List>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
