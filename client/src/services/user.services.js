import axios from 'axios';

class UserService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/user`,
            withCredentials: true
        })
    }

    findUser = () => this.instance.get('/')
    findOneUser = (id) => this.instance.get(`/${id}`)
    editUser = (data, id) => this.instance.put(`/${id}`, data)
    deleteUser = (id) => this.instance.delete(`/${id}`)
}

export default UserService;