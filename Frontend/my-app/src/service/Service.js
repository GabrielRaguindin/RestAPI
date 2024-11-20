import axios from 'axios';

const getList = () => {
    return axios.get('http://localhost:8080/user/');
}

const newUser = (data) => {
    return axios.post('http://localhost:8080/user/', data);
}

const updateUser = (data, id) => {
    return axios.put('http://localhost:8080/user/' + id, data);
}

const deleteUser = (id) => {
    return axios.delete('http://localhost:8080/user/' + id);
}

const Service = {
    getList, newUser, updateUser, deleteUser
}

export default Service;