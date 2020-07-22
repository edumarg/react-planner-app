import React from "react";
import MyButton from "./common/buttons";

const DoneList = (props) => {
  const sortedData = props.doneList.sort((a, b) => a.createdAt - b.createdAt);
  return (
    <React.Fragment>
      <h3>Done List...</h3>
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
          {sortedData.map((done) => (
            <tr key={done.task}>
              <td>{done.task}</td>
              <td>
                <MyButton
                  classes={"fa fa-check-square"}
                  type={done.done}
                  onClick={() => props.onTodo(done)}
                ></MyButton>
              </td>
              <td>
                <MyButton
                  classes={"fa fa-star"}
                  type={done.task.favorite}
                ></MyButton>
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

export default DoneList;
