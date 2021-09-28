import axios from 'axios';

class BikeService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/bikes`,
            withCredentials: true
        })
    }

    findOneBike = (id) => this.instance.get(`/${id}`)
    createBike = (data) => this.instance.post('/', { data })
    editBike = (data, id) => this.instance.put(`/${id}`, { data })
    deleteBike = (id) => this.instance.delete(`/${id}`)
}

export default BikeService;