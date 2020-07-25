import React, { Component } from "react";
import MyButton from "./common/optionsButtons";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: this.props.task };
  }

  handleOnSubmit(event) {
    event.preventDefault();
  }

  handleOnchange(event) {
    let editTask = { ...this.state.task };
    editTask = event.target.value;
    this.setState({ task: editTask });
  }

  render() {
    const { type, list, onMove, onEdit, onFavorite, onDelete } = this.props;
    const sortedData = list.sort((a, b) => a.createdAt - b.createdAt);
    return (
      <React.Fragment>
        <h3>{type} List...</h3>
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
                <td>
                  {
                    <form onSubmit={(event)=>this.handleOnSubmit(event)} >
                      <input
                        type="text"
                        className="form-control"
                        value={task.task}
                        disabled={!task.beingEdited}
                        autoFocus={!task.beingEdited}
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </form>
                  }
                </td>
                {/* <td>{task.task}</td> */}
                <td>
                  <MyButton
                    classes={"fa fa-check-square"}
                    type={task.done}
                    onClick={() => onMove(task)}
                  ></MyButton>
                </td>
                <td>
                  <MyButton
                    classes={"fa fa-star"}
                    type={task.favorite}
                    onClick={() => onFavorite(task)}
                  ></MyButton>
                </td>
                <td>
                  {!task.done && (
                    <MyButton
                      classes={"fa fa-pencil-square"}
                      type={task.beingEdited}
                      onClick={() => onEdit(task)}
                    ></MyButton>
                  )}
                </td>
                <td>
                  <i
                    className="fa fa-trash"
                    style={{ cursor: "pointer" }}
                    onClick={() => onDelete(task)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default List;

// const List = (props) => {
//   const sortedData = props.list.sort((a, b) => a.createdAt - b.createdAt);
//   return (
//     <React.Fragment>
//       <h3>{props.type} List...</h3>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>Task</th>
//             <th>Status</th>
//             <th>Fav</th>
//             <th>edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedData.map((task) => (
//             <tr key={task.id}>
//               {
//                 <form>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={task.task}
//                     disabled={task.beingEdited}
//                     onChange={(event)=>this.handleOnChange(event)}
//                   />
//                 </form>
//               }
//               {/* <td>{task.task}</td> */}
//               <td>
//                 <MyButton
//                   classes={"fa fa-check-square"}
//                   type={task.done}
//                   onClick={() => props.onMove(task)}
//                 ></MyButton>
//               </td>
//               <td>
//                 <MyButton
//                   classes={"fa fa-star"}
//                   type={task.favorite}
//                   onClick={() => props.onFavorite(task)}
//                 ></MyButton>
//               </td>
//               <td>
//                 {!task.done && (
//                   <MyButton
//                     classes={"fa fa-pencil-square"}
//                     type={task.beingEdited}
//                     onClick={() => props.onEdit(task)}
//                   ></MyButton>
//                 )}
//               </td>
//               <td>
//                 <i
//                   className="fa fa-trash"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => props.onDelete(task)}
//                 ></i>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </React.Fragment>
//   );
// };

// export default List;
