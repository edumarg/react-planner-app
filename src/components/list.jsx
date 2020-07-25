import React from "react";
import MyButton from "./common/optionsButtons";
import TaskForm from "./taskForm";

const List = (props) => {
  const sortedData = props.list.sort((a, b) => a.createdAt - b.createdAt);
  return (
    <React.Fragment>
      <h3>{props.type} List...</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Task</th>
            <th>Status</th>
            <th>Fav</th>
            <th>edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((task) => (
            <tr key={task.id}>
              <td>
                {
                  <TaskForm
                    task={task.task}
                    onEditTask={(editedTask) => props.onEditTask(task)}
                    // onEditedTask={(task = this.props.onEditedTask(task))}
                  ></TaskForm>
                }
              </td>
              {/* <td>{task.task}</td> */}
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
                {!task.done && (
                  <MyButton
                    classes={"fa fa-pencil-square"}
                    type={task.beingEdited}
                    onClick={() => props.onEdit(task)}
                  ></MyButton>
                )}
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
