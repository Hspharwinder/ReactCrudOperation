import axios from 'axios'

// class component
class ApiService {
    GetUser = () => {
        return axios.get(`http://localhost:3000/get`)
    }
    AddUser = (user) => {
        return axios.post(`http://localhost:3000/post`, user);
    }
    deleteUser = (id) => {
        let url = `http://localhost:3000/delete/` + id;
        return axios.delete(`${url}`);
    }
    EditUser = (user) => {
        return axios.put(`http://localhost:3000/put`, user);
    }
}

export default new ApiService();















// function component
// const GetUser = () => {
//     return axios.get(`http://localhost:3000/get`)
// }

// export default GetUser; 