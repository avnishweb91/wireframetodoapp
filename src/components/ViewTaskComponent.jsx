import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const ViewTaskComponent = () => {

  const [selectedTaskName, setSelectedTaskName] = useState('');
  const [taskDetails, setTaskDetails] = useState(null);
  const [taskNames, setTaskNames] = useState([]);
  const navigate = useNavigate();
  
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

  useEffect(() => {
    const fetchTaskNames = async () => {
      try {
        const response = await UserService.getAllTasks();
        setTaskNames(response.data);
      } catch (error) {
        console.error('Error fetching task names:', error);
        // Handle error, e.g., show an error message to the user
      }
    };

    fetchTaskNames();
  }, []);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      const response = await UserService.getAllTasks();
      setSelectedTaskName(response.data.taskName);
      if (selectedTaskName) {
        try {
          const response = await UserService.getTaskByTaskName(selectedTaskName);
          setTaskDetails(response.data);
        } catch (error) {
          console.error('Error fetching task details:', error);
          // Handle error, e.g., show an error message to the user
        }
      }
    };

    fetchTaskDetails();
  }, [selectedTaskName]);

  const handleSelectChange = (event) => {
    setSelectedTaskName(event.target.value);
  };
  
  const handleGoBack = () => {
    navigate('/');
    };

  const viewAllTasks = () => {
    navigate(`/list/all`);
  };

  return (
    <div>
      <h3>Task Details</h3>
      <label>Select TaskName </label>
      <select value={selectedTaskName} onChange={handleSelectChange}>
        <option value="">Select a TaskName</option>
        {taskNames.map((task) => (
          <option key={task.taskName} value={task.taskName}>
            {task.taskName}
          </option>
        ))}
      </select>

 {taskDetails && (
  <div>
    <h4 style={{ color: '#3498ac' }}>Details for Task</h4>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
      <tbody>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>ID:</td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>{taskDetails.id}</td>
        </tr>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>Start Date:</td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>{taskDetails.startDate}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>End Date:</td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>{taskDetails.endDate}</td>
        </tr>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>Task Status:</td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>{taskDetails.taskStatus}</td>
        </tr>
        <tr>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>Total Effort Required:</td>
          <td style={{ padding: '8px', border: '1px solid #ddd' }}>{taskDetails.totalEffortReq}</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
  <div style={buttonContainerStyle}>
    <div>
      <button style={buttonView} onClick={viewAllTasks}>
            View All Tasks
      </button>
      <button style={buttonView} onClick={handleGoBack}>
            Back
      </button>
    </div>
  </div>
</div>
);};

export default ViewTaskComponent;
