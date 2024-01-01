import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const ViewUserComponent = (props) => {

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
    const buttonAdd = {
        ...buttonStyle,
    backgroundColor: '#3498db', // Blue color
    color: '#fff', // White text
      };
     
      const buttonView= {
        ...buttonStyle,
        backgroundColor: '#e74c3c', // Red color
        color: '#fff', // White text
      }; 
    
    const navigate = useNavigate();
    const [task, setTask] = useState({
    id: "",
  });

  

  const addTask = () => {
    navigate('/add-list');
  };

  const viewTask = () => {
    navigate(`/viewTask`);
  };

  useEffect(() => {
    UserService.getAllTasks(props.id).then((res) => {
      setTask(res.data);
    });
  }, [props.id]);

  return (
    <div>
      <div style={buttonContainerStyle}>
        <button style={buttonAdd} onClick={addTask}>
          Add Task
        </button>
      </div>
      <div>
      <button style={buttonView} onClick={viewTask}>
        ViewTask</button>
      </div>
    </div>
  );
};

export default ViewUserComponent;
