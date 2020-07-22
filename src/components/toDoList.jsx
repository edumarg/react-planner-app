import React from "react";
import MyButton from "./common/buttons";

const ToDoList = (props) => {
  const sortedData = props.todoList.sort((a, b) => a.createdAt - b.createdAt);
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
          {sortedData.map((todo) => (
            <tr key={todo.task}>
              <td>{todo.task}</td>
              <td>
                <MyButton
                  classes={"fa fa-check-square"}
                  type={todo.done}
                  onClick={() => props.onDone(todo)}
                ></MyButton>
              </td>
              <td>
                <MyButton classes={"fa fa-star"}></MyButton>
              </td>
              <td>
                <i className="fa fa-pencil-square"></i>
              </td>
              <td>
                <i className="fa fa-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ToDoList;
