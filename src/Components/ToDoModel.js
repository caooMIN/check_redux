import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delete_task, done_task, edit_task } from "../JS/Actions/Actions";
import "../App.css";
const ToDoModel = ({ task }) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(task.text);
  const [newDesc, setNewDesc] = useState(task.description);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => {
    dispatch(edit_task(task.id, newText, newDesc), handleClose());
  };
  console.log(newText);
  console.log(newDesc);
  return (
    <div className="todo">
      <span>{task.text}</span>

      <span className={task.isDone ? "unDone" : "Done"}>
        {task.description}
      </span>

      <Button variant="primary" onClick={() => dispatch(done_task(task.id))}>
        {task.isDone ? "unDone" : "Done"}
      </Button>
      <Button variant="danger" onClick={() => dispatch(delete_task(task.id))}>
        Delete
      </Button>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="text"
            onChange={(e) => setNewText(e.target.value)}
          />
          <Form.Control
            placeholder="description"
            onChange={(e) => setNewDesc(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ToDoModel;
