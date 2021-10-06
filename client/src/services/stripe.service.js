import axios from 'axios';

class StripeService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/checkout`,
            withCredentials: true
        })
    }

    createPayment = (data) => this.instance.post('/', data)
}

export default StripeService;