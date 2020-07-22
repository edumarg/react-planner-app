import React from "react";

const ToDoList = (props) => {
  return (
    <React.Fragment>
      <h3>To do List...</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Fav</th>
            <th>edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.todoList.map((task) => (
            <tr key={task}>
              <td>{task}</td>
              <td>
                <i className="fa fa-check-square" aria-hidden="true"></i>
              </td>
              {/* for solid check square add -o */}
              <td>
                <i className="fa fa-star" aria-hidden="true"></i>
                {/* for solid chanfe add */}
              </td>
              <td>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
              </td>
              <td>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ToDoList;
