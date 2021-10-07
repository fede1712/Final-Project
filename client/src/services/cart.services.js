import axios from 'axios';

class CartService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_BASE_URL}/cart`,
            withCredentials: true
        })
    }

    findCart = () => this.instance.get('/')
    pushCart = (productId) => this.instance.put('/push', { productId })
    pullCart = (productId) => this.instance.put('/pull', { productId })
    emptyCart = () => this.instance.put('/empty-cart')
    buycart = (shopId) => this.instance.put('/buy', { shopId })
}

export default CartService;