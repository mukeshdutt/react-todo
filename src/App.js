import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [item, setItem] = useState({ id: 0, title: "" });
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = { id: uuidv4(), title: item };
    const updateItem = [...items, newItem];
    setItem({ id: 0, title: "" });
    setIsEdit(false);
    setItems(updateItem);
  };

  const handleEdit = (id) => {
    const filterItem = items.filter((item) => item.id !== id);
    const selectedItem = items.find((item) => item.id === id);
    setItems(filterItem);
    setItem({ ...item, title: selectedItem.title });
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    const refreshList = items.filter((item) => item.id !== id);
    setItems(refreshList);
  };

  const handleClearAll = (e) => {
    setItems([]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-4">
          <h3 className="text-capitalize">Todo Input</h3>
          <TodoInput
            item={item}
            isEdit={isEdit}
            handleChange={handleChange}
            handleAdd={handleAdd}
          />
          <TodoList
            items={items}
            handleClearAll={handleClearAll}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
