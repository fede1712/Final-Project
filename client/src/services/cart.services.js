import axios from 'axios';

class CartService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cart`
        })
    }

    findMyCart = (id) => this.instance.get(`/${id}`)
    createCart = (data) => this.instance.post('/', data)
    editCart = (id, data) => this.instance.put(`/${id}`, data)
    deleteCart = (id) => this.instance.delete(`/${id}`)
}

export default CartService;