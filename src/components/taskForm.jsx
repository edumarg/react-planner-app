import React, { Component } from "react";
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: this.props.task };
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onEditTask(this.props.state);
    this.setState({
      task: "",
    });
    event.target.reset();
  }

  handleOnchange(event) {
    let editTask = { ...this.state.task };
    editTask = event.target.value;
    this.setState({ task: editTask });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          className="form-control border-0"
          value={this.props.task.task}
          disabled={!this.props.task.beingEdited}
          onChange={(event) => this.handleOnChange(event)}
        />
      </form>
    );
  }
}

export default TaskForm;
