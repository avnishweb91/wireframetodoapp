import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const UpdateUserComponent = (props) => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    id: '',
    taskName: '',
    description: '',
    startDate: '',
    endDate: '',
    taskStatus: '',
    totalEffortReq: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserService.getUserById(task.id);
        const taskData = response.data;
        setTask({
          id: taskData.id,
          taskName: taskData.taskName,
          description: taskData.description,
          startDate: taskData.startDate,
          endDate: taskData.endDate,
          taskStatus: taskData.taskStatus,
          totalEffortReq: taskData.totalEffortReq,
        });
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [task.id]);

  const updateTask = (e) => {
    e.preventDefault();
    const updatedTask = {
      id: task.id,
      taskName: task.taskName,
      description: task.description,
      startDate: task.startDate,
      endDate: task.endDate,
      taskStatus: task.taskStatus,
      totalEffortReq: task.totalEffortReq,
    };

    console.log('task => ' + JSON.stringify(updatedTask));
    console.log('id => ' + JSON.stringify(task.id));

    UserService.updateTask(task.id, updatedTask).then((res) => {
      navigate('/'); // Redirect to the task list after updating the task
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const cancel = () => {
    navigate('/list/All');
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
            <h3 className="text-center">Update Task</h3>
            <div className="card-body">
              <form>
                {/* ... other form fields ... */}
                <div className="form-group">
                  <label> Id </label>
                  <input
                    placeholder="Id"
                    name="id"
                    className="form-control"
                    value={task.id}
                    onChange={handleChange}
                  />
                  <label> TaskName </label>
                  <input
                    placeholder="TaskName"
                    name="taskName"
                    className="form-control"
                    value={task.taskName}
                    onChange={handleChange}
                  />
                  <label> StartDate </label>
                  <input
                    placeholder="StartDate"
                    name="startDate"
                    className="form-control"
                    value={task.startDate}
                    onChange={handleChange}
                  />
                  <label> EndDate </label>
                  <input
                    placeholder="EndDate"
                    name="endDate"
                    className="form-control"
                    value={task.endDate}
                    onChange={handleChange}
                  />
                  <label> TaskStatus </label>
                  <input
                    placeholder="TaskStatus"
                    name="taskStatus"
                    className="form-control"
                    value={task.taskStatus}
                    onChange={handleChange}
                  />
                  <label> TotalEffortReq </label>
                  <input
                    placeholder="TotalEffortReq"
                    name="totalEffortReq"
                    className="form-control"
                    value={task.totalEffortReq}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-success" onClick={updateTask}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: '10px' }}
                >
                  Back
                </button>
              </form>
            </div>
            <div style={{ position: 'relative' }}>
        <button
        type="button"
        onClick={handleLogout}
        style={{
          position: 'absolute',
          bottom: '510px',
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
  );
};

export default UpdateUserComponent;
