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
};
