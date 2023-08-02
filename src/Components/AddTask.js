import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { generateId, lastId } from "../Functions/idGenerator";
import { add_task } from "../JS/Actions/Actions";

const AddTask = () => {
  const [newDesc, setNewDesc] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    newDesc === ""
      ? alert("Please enter Desc")
      : dispatch(
          add_task({
            id: generateId(),
            text: `Task ${lastId}`,
            description: newDesc,
            isDone: false,
          })
        );
  };
  return (
    <div className="addparent">
      <div className="add">
        <Form.Control
          placeholder="description"
          onChange={(e) => setNewDesc(e.target.value)}
        />
      </div>
      <Button variant="info" onClick={() => handleAdd()}>
        Add
      </Button>
    </div>
  );
};

export default AddTask;
