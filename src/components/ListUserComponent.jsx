import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

const ListUserComponent = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const isUpdateOlderThan10Days = (endDate) => {
    const currentDate = new Date();
    const updateDate = new Date(endDate);
    const timeDifference = currentDate - updateDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference > 10;
  };

  const getSymbolicRepresentation = (task) => {
    if (isUpdateOlderThan10Days(task.lastUpdateDate)) {
      return "🔴"; // Red symbol for older than 10 days
    } else {
      switch (task.taskStatus) {
        case 'Completed':
          return "✔️"; // Green checkmark for Completed
        case 'InProgress':
          return "🟡"; // Yellow circle for In Progress
        case 'ReviewDo':
          return "🟠"; // Orange circle for Pending
        default:
          return ""; // Empty string for other cases
      }
    }
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const buttonStyle = {
    margin: '10px 20px',
    padding: '15px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  const buttonView = {
    ...buttonStyle,
    backgroundColor: '#3498db', // Blue color
    color: '#fff', // White text
  };

  const editTask = (id) => {
    navigate(`/update/${id}`);
  };

  const handleGoBack = () => {
    navigate('/viewTask');
    };

    const handleLogout = () => {
      // Perform logout logic (clear authentication information, etc.)
      // For demonstration purposes, simply redirecting to the login page
       navigate('/');
    };
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await UserService.getAllTasks();
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2 className="text-center">Task List</h2>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>TaskName</th>
              <th>Description</th>
              <th>StartDate</th>
              <th>EndDate</th>
              <th>TaskStatus</th>
              <th>TotalEffortReq</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.taskName}</td>
                <td>{task.description}</td>
                <td>{task.startDate}</td>
                <td>{task.endDate}</td>
                <td style={{
                  backgroundColor: isUpdateOlderThan10Days(task.endDate) ? 'red' :
                    task.taskStatus === 'Completed' ? 'green' :
                      task.taskStatus === 'InProgress' ? 'yellow' :
                        task.taskStatus === 'ReviewDo' ? 'orange' : 'inherit'
                }}>
                  {getSymbolicRepresentation(task)} {task.taskStatus}
                </td>
                <td>{task.totalEffortReq}</td>
                <td>
                  <button onClick={() => editTask(task.id)} className="btn btn-info">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={buttonContainerStyle}>
        <button style={buttonView} onClick={handleGoBack}>
        Go Back
        </button>
        <div style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={handleLogout}
        style={{
          position: 'absolute',
          bottom: '240px',
          right: '10px',
        }}
      >
        Logout
      </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ListUserComponent;
