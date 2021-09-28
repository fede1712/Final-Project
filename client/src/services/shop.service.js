import axios from 'axios';

class BikeService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/shop`
        })
    }

    findShops = (data) => this.instance.get('/:id', { data })
    createShop = (data) => this.instance.post('/', { data })
    editShop = (data) => this.instance.put('/:id', { data })
    deleteShop = (data) => this.instance.delete('/:id', { data })
}

export default BikeService;