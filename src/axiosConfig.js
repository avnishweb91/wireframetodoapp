import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
USER_API_BASE_URL: "http://localhost:8080/todolist/api/v1/user/list/all"
});

export default instance;
