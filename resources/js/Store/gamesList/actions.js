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

    async getMySelectedGames({ commit }) {
        try {
            const mySelectedGames = await API.getMySelectedGames();
            commit('SAVE_MY_SELECTED_GAMES', mySelectedGames);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async getUser({commit}) {
        try {
            const user = await API.getCurrentUser();
            commit('SAVE_USER', user);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async createGameInfo({ commit, dispatch }, newGameData) {
        try {
            await API.postGameInfo(newGameData);
            dispatch('getMySelectedGames');
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    setAddedGameId({ commit }, id) {
        commit('SET_ADDED_GAME', id);
    },
};
