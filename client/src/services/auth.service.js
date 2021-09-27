import axios from 'axios';

class AuthService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/auth`,
            withCredentials: true
        })
    }

    signup = (username, pwd) => this.instance.post("/signup", { username, pwd })
    login = (email, pwd) => this.instance.post("/login", { email, pwd })
    logout = () => this.instance.get("/logout")
    isloggedin = () => this.instance.post("/isloggedin")
}

export default AuthService;