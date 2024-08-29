import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, deleteTodo, setEditing, toggleComplete }) => {
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setEditing(task.id, { ...task, status: e.target.value });
    setIsEditingStatus(false);
  };

  const getStatusClass = () => {
    switch (status) {
      case "Completed":
        return "completed-status";
      case "In Progress":
        return "in-progress";
      case "Not Started":
      default:
        return "not-started";
    }
  };

  return (
    <div className="Todo">
      <div className="todo-content">
        <p
          className={`${task.completed ? "completed" : "incompleted"}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <span className="todo-date">{task.date}</span>
      </div>
      <div className="todo-actions">
        {isEditingStatus ? (
          <select
            value={status}
            onChange={handleStatusChange}
            onBlur={() => setIsEditingStatus(false)}
            className="status-dropdown"
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        ) : (
          <span
            className={`status-box ${getStatusClass()}`}
            onClick={() => setIsEditingStatus(true)}
          >
            {status}
          </span>
        )}
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => setEditing(task.id)} // Perbaiki ini
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
