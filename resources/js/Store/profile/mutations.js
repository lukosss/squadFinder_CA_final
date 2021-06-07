export default {
    SAVE_USER(state, user) {
        state.user = user[0];
        state.userId = user[0].id;
    },

    SAVE_CITIES(state, cities) {
        state.cities = cities;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
