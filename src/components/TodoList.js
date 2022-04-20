import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { items, handleEdit, handleDelete, handleClearAll } = props;
  return (
    <ul className="list-group my-5">
      <h3 className="text-center text-capitalize">Todo list</h3>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleEdit={() => {
              handleEdit(item.id);
            }}
            handleDelete={() => {
              handleDelete(item.id);
            }}
          />
        );
      })}
      <div className="d-grid gap-2 my-3">
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
    </ul>
  );
}

export default TodoList;
