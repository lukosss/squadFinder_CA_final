import axios from 'axios';

class API {
    static domain = 'http://127.0.0.1:8000';

    static async getCurrentUser() {
        try {
            const {data} = await axios.get(`${this.domain}/api/user/me`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

}

export default API;
