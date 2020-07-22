import React, { Component } from "react";
const mockList = ["Read a book", "Sleep", "TV", "Code"];
class DoneList extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: mockList };
  }
  render() {
    return (
      <React.Fragment>
        <h3>Done List...</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoList.map((task) => (
              <tr key={task}>
                <td>{task}</td>
                <td>
                  <i class="far fa-check-square"></i>
                </td>
                {/* for solid check square change far to fas */}
                <td>
                  <i class="fas fa-edit"></i>
                </td>
                <td>
                  <i class="fas fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default DoneList;
