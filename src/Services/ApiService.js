import axios from 'axios';
import { AuthHeader } from '../Component/TokenAuth/authHeader';

// class component
class ApiService {    
    GetUser = () => {
        return axios.get(`http://localhost:3000/get`, { headers: AuthHeader() })
    }
    AddUser = (user) => {
        return axios.post(`http://localhost:3000/post`, user, { headers: AuthHeader() } );
    }
    deleteUser = (id) => {
        let url = `http://localhost:3000/delete/` + id;
        return axios.delete(`${url}`, { headers: AuthHeader() });
    }
    EditUser = (user) => {
        return axios.put(`http://localhost:3000/put`, user, { headers: AuthHeader() });
    }
}

export default new ApiService();















// function component
// const GetUser = () => {
//     return axios.get(`http://localhost:3000/get`)
// }

// export default GetUser; 