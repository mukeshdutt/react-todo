import React from "react";

function Todoinput(props) {
  const { item, isEdit, handleChange, handleAdd } = props;
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleAdd}>
        <div className="input-group">
          <div className="input-group-text bg-primary text-white">
            <i className="fas fa-book"></i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Add a todo item"
            name="title"
            id="title"
            value={item.title}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className={isEdit ? "btn btn-success mt-3" : "btn btn-primary mt-3"}
            type="submit"
          >
            {isEdit ? "edit item" : "add item"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Todoinput;
