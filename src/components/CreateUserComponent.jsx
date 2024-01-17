import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

const CreateUserComponent = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    taskName: '',
    description: '',
    startDate: '',
    endDate: '',
    taskStatus: '',
    totalEffortReq: '',
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const saveTask = async () => {
    try {
      await UserService.createTask(task);
      navigate('/home'); // Redirect to the task list after adding a task
    } catch (error) {
      console.error('Error adding task:', error);
      // Handle the error (e.g., show a user-friendly error message)
    }
  };

  const cancel = () => {
    navigate('/home'); // Redirect to the task list without adding a task
  };
  const handleLogout = () => {
    // Perform logout logic (clear authentication information, etc.)
    // For demonstration purposes, simply redirecting to the login page
     navigate('/');
  };
  

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Task</h3>
            <div className="card-body">
              <form>
                {/* ... other form fields ... */}
                <div className="form-group">
          <label>TaskName</label>
          <input
            type="text"
            placeholder="Task Name"
            name="taskName"
            className="form-control"
            value={task.taskName}
            onChange={handleInputChange}
          />
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            className="form-control"
            value={task.description}
            onChange={handleInputChange}
          />
          <label>TaskStartDate</label>
          <input
            type="text"
            placeholder="TaskStartDate"
            name="startDate"
            className="form-control"
            value={task.startDate}
            onChange={handleInputChange}
          />
          <label>TaskEndDate</label>
          <input
            type="text"
            placeholder="TaskEndDate"
            name="endDate"
            className="form-control"
            value={task.endDate}
            onChange={handleInputChange}
          />
          <label>TotalEffortRequired</label>
          <input
            type="text"
            placeholder="TotalEffortRequired"
            name="totalEffortReq"
            className="form-control"
            value={task.totalEffortReq}
            onChange={handleInputChange}
          />
          <label>TaskStatus</label>
          <input
            type="text"
            placeholder="TaskStatus"
            name="taskStatus"
            className="form-control"
            value={task.taskStatus}
            onChange={handleInputChange}
          />
        </div>

        {/* Repeat similar blocks for other input fields */}

        <button type="button" className="btn btn-success" onClick={saveTask}>
          Save
        </button>
        <button type="button" className="btn btn-danger" onClick={cancel}>
          Back
        </button>
      </form>
      <div style={{ position: 'relative' }}>
  <button
        type="button"
        onClick={handleLogout}
        style={{
          position: 'absolute',
          bottom: '500px',
          right: '5px',
        }}
      >
        Logout
      </button>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CreateUserComponent;
