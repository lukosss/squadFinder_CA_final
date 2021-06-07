import API from '../../api';

export default {
    async getUsers({commit}) {
        try {
            const users = await API.getUsers();
            commit('SAVE_USERS', users);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async getCities({commit}) {
        try {
            const user = await API.getCities();
            commit('SAVE_CITIES', user);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async getSelectedGames({ commit }) {
        try {
            const selectedGames = await API.getSelectedGames();
            commit('SAVE_SELECTED_GAMES', selectedGames);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },
};
