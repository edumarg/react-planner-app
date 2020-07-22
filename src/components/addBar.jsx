import React, { Component } from "react";
const mockList = [];
class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = { todoTask: "", todoList: mockList };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log("sumited");
    const newTodoList = [this.state.todoTask, ...this.state.todoList];
    this.setState({ todoList: newTodoList });
    console.log(this.state.todoList);
  }

  handleOnchange(event) {
    let newTodoTask = this.state.todoTask;
    newTodoTask = event.target.value;
    this.setState({ todoTask: newTodoTask });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">
              <label htmlFor="toddoTask" className="sr-only">
                Add a to do task...
              </label>
              <input
                autoFocus={true}
                className="form-control"
                type="text"
                id="todoTask"
                name="todoTask"
                placeholder="Add a to do task..."
                value={this.state.todoTask}
                onChange={(event) => this.handleOnchange(event)}
              ></input>
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddBar;
