import React from "react";
import MyButton from "./common/buttons";

const List = (props) => {
  const sortedData = props.list.sort((a, b) => a.createdAt - b.createdAt);
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
            <tr key={done.createdAt}>
              <td>{done.task}</td>
              <td>
                <MyButton
                  classes={"fa fa-check-square"}
                  type={done.done}
                  onClick={() => props.onMove(done)}
                ></MyButton>
              </td>
              <td>
                <MyButton
                  classes={"fa fa-star"}
                  type={done.favorite}
                  onClick={() => props.onFavorite(done)}
                ></MyButton>
              </td>
              <td>
                <i className="fa fa-pencil-square"></i>
              </td>
              <td>
                <i
                  className="fa fa-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() => props.onDelete(done)}
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
