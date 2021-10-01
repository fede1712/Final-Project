import axios from 'axios';

class BillService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/bill`,
            withCredentials: true
        })
    }

    findBills = () => this.instance.get('/all-bills')
    findOneBill = (id) => this.instance.get(`/${id}`)
}

export default BillService;