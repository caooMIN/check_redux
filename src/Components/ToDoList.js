import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditTask from "./EditTask";
import { Dropdown } from "react-bootstrap";
import ToDoModel from "./ToDoModel";
const ToDoList = ({ task }) => {
  const list = useSelector((state) => state.listTasks);
  const [filter, setFilter] = useState("All");
  return (
    <div>
      {list.map((task) => (
        <EditTask task={task} key={task.id} />
      ))}
      <div className="Filter">
        <Dropdown style={{ display: "flex", justifyContent: "center" }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {filter}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setFilter("All")}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("Done")}>
              Done
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFilter("Undone")}>
              Undone
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {filter === "Done"
          ? list
              .filter((el) => el.isDone === true)
              .map((task) => <ToDoModel task={task} key={task.id} />)
          : filter === "Undone"
          ? list
              .filter((el) => el.isDone === false)
              .map((task) => <ToDoModel task={task} key={task.id} />)
          : list.map((task) => <ToDoModel task={task} key={task.id} />)}
      </div>
    </div>
  );
};

export default ToDoList;
