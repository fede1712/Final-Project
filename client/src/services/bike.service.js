import axios from 'axios';

class BikeService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/bikes`
        })
    }

    findOneBike = (data) => this.instance.get('/:id', { data })
    createBike = (data) => this.instance.post('/', { data })
    editBike = (data) => this.instance.put('/:id', { data })
    deleteBike = (data) => this.instance.delete('/:id', { data })
}

export default BikeService;