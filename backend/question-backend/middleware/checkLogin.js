import axios from 'axios';
const USERS_HOST = process.env.USERS_HOST ? process.env.USERS_HOST : "http://localhost:4000/api/users"
export async function checkLogin(req, res, next) { 
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).send("You do not posess login token. Please sign in")
        }
        const response = await axios.get(`${USERS_HOST}/userById`, {headers :{authorization : token}});
        if (response.data == null) {
            return res.status(400).send("Token not recognised. Please login again")
        }
        next();
    } catch (error) {
        res.status(400).send(error)
    }
}
