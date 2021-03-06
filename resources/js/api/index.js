import axios from 'axios';

class API {
    static domain = 'http://127.0.0.1:8000';

    static async getUsers() {
        try {
            const {data} = await axios.get(`${this.domain}/api/users`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async getCurrentUser() {
        try {
            const {data} = await axios.get(`${this.domain}/api/user/me`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async patchCurrentUser({id, ...body}) {
        try {
            await axios.patch(`${this.domain}/api/user/${id}`, body);
            return true;
        } catch (err) {
            throw err.message;
        }
    }

    static async getCities() {
        try {
            const {data} = await axios.get(`${this.domain}/api/cities`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async getGames() {
        try {
            const {data} = await axios.get(`${this.domain}/api/games`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async getSelectedGames() {
        try {
            const {data} = await axios.get(`${this.domain}/api/selected-games`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async getMySelectedGames() {
        try {
            const {data} = await axios.get(`${this.domain}/api/selected-games/my-games`);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async patchGameSelection({id, ...body}) {
        try {
            await axios.patch(`${this.domain}/api/selected-games/my-games/${id}`, body);
            return true;
        } catch (err) {
            throw err.message;
        }
    }

    static async postGameInfo(body) {
        try {
            const {data} = await axios.post(`${this.domain}/api/selected-games/add-game`, body);
            return data;
        } catch (err) {
            throw err.message;
        }
    }

    static async deleteGameInfo(id) {
        try {
            await axios.delete(`${this.domain}/api/selected-games/delete/${id}`);
            return true;
        } catch (err) {
            throw err.message;
        }
    }

}

export default API;
