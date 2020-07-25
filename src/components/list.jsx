import React from "react";
import MyButton from "./common/buttons";

const List = (props) => {
  const sortedData = props.list.sort((a, b) => a.createdAt - b.createdAt);
  return (
    <React.Fragment>
      <h3>{props.type} List...</h3>
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
          {sortedData.map((task) => (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td>
                <MyButton
                  classes={"fa fa-check-square"}
                  type={task.done}
                  onClick={() => props.onMove(task)}
                ></MyButton>
              </td>
              <td>
                <MyButton
                  classes={"fa fa-star"}
                  type={task.favorite}
                  onClick={() => props.onFavorite(task)}
                ></MyButton>
              </td>
              <td>
                <i
                  className="fa fa-pencil-square"
                  style={{ cursor: "pointer" }}
                  onClick={() => props.onEdit(task)}
                ></i>
              </td>
              <td>
                <i
                  className="fa fa-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() => props.onDelete(task)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default List;
