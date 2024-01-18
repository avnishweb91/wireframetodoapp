import axios from 'axios';

const USER_API_BASE_URL = "http://52.66.203.162:8080/todolist/api/v1/user";

class UserService {
  createTask(task) {
    return axios.post(USER_API_BASE_URL + '/add-list', task);
  }

  getAllTasks() {
    return axios.get(USER_API_BASE_URL + '/list/all');
  }

  getTaskByTaskName(taskName) {
    // Pass the taskName as a parameter in the URL
    return axios.get(USER_API_BASE_URL + `/list/${taskName}`);
  }

  getUserById(id) {
    return axios.get(USER_API_BASE_URL + `/listAll/${id}`);
  }

  updateTask(id, updateTask) {
    return axios.put(USER_API_BASE_URL + '/update/' + id, updateTask);
  }
}

// Instantiate the class
const userServiceInstance = new UserService();

// eslint-disable-next-line import/no-anonymous-default-export
export default userServiceInstance;
