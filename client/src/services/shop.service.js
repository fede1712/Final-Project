import axios from 'axios';

class ShopService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/shop`,
            withCredentials: true
        })
    }

    findShops = () => this.instance.get('/')
    findOneShop = (id) => this.instance.get(`/${id}`)
    createShop = (data) => this.instance.post('/', data)
    editShop = (data, id) => this.instance.put(`/${id}`, data)
    deleteShop = (id) => this.instance.delete(`/${id}`)
}

export default ShopService;