import API from '../../api';

export default {
    async getGames({ commit }) {
        try {
            const games = await API.getGames();
            commit('SAVE_GAMES', games);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },
};
