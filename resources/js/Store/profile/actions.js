import API from '../../api';

export default {
    async getUser({commit}) {
        try {
            const user = await API.getCurrentUser();
            commit('SAVE_USER', user);
        } catch (errMsg) {
            commit('SAVE_ERROR', errMsg);
        }
    },

    async updateUser({ commit, dispatch, state }, formData) {
        try {
            await API.patchCurrentUser({
                ...formData,
                id: state.userId,
            });
            dispatch('getUser');
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
};
