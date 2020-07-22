import React, { Component } from "react";

const mockTodoList = [{}];
class AddBar extends Component {
  constructor(props) {
    super(props);
    this.state = mockTodoList;
  }

  handleOnSubmit(event) {
    event.preventDefault();
    console.log("sumited");
  }

  handleOnchange(event) {
    console.log("on change");
    this.setState({ username: event.target.value });
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
                className="form-control"
                type="text"
                id="todoTask"
                name="todoTask"
                placeholder="Add a to do task..."
                value=""
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
