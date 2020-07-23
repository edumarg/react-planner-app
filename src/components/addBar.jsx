import React, { Component } from "react";
class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      done: false,
      createdAt: "",
      favorite: false,
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log("sumited");
    this.props.onNewTask(this.state);
    event.target.value = "";
  }

  handleOnchange(event) {
    const now = Date.now();
    const createdDate = new Date(now);
    let newTodoTask = this.state.task;
    newTodoTask = event.target.value;
    this.setState({ task: newTodoTask, createdAt: createdDate });
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
