import axios from 'axios';

class CartService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cart`
        })
    }

    findCart = (data) => this.instance.get('/:id', { data })
    createCart = (data) => this.instance.post('/', { data })
    editCart = (data) => this.instance.put('/:id', { data })
    deleteCart = (data) => this.instance.delete('/:id', { data })
}

export default CartService;