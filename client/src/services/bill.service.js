import axios from 'axios';

class BillService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/bill`
        })
    }

    findBills = (data) => this.instance.get('/', { data })
    findOneBill = (data) => this.instance.get('/:id', { data })
    createBill = (data) => this.instance.post('/', { data })
}

export default BillService;