import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.task.task };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onEditTask(this.state);
  }

  handleOnchange(event) {
    let editTask = { ...this.state.task };
    editTask = event.target.value;
    this.setState({ task: editTask });
  }

  handleKeyUp(event) {
    if (event.key === "Escape") this.props.onEditTask(this.state);
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          className="form-control border-0"
          value={this.state.task}
          disabled={!this.props.task.beingEdited}
          onChange={(event) => this.handleOnchange(event)}
          onKeyUp={(event) => this.handleKeyUp(event)}
          autoFocus
        />
      </form>
    );
  }
}

export default TaskForm;
