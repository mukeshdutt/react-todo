import React from "react";

function TodoItem(props) {
  const { title, handleEdit, handleDelete } = props;
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between mt-2">
      <h6>{title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={handleEdit}>
          <i className="fas fa-pen"></i>
        </span>
        <span className="mx-2 text-danger" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
