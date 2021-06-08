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

    async getUser({commit}) {
        try {
            const user = await API.getCurrentUser();
            commit('SAVE_USER', user);
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

    async updateGameInfo({ commit, dispatch, state }, formData) {
        try {
            await API.patchGameSelection({
                ...formData,
                id: state.editedGameId,
            });
            dispatch('getMySelectedGames');
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async deleteGameInfo({ commit, dispatch }, id) {
        try {
            await API.deleteGameInfo(id);
            dispatch('getMySelectedGames');
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    setEditedGameId({ commit }, id) {
        commit('SET_EDITED_GAME', id);
    },

    setGameId({ commit }, id) {
        commit('SET_GAME_ID', id);
    }


};
