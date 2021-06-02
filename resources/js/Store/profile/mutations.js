export default {
    SAVE_USER(state, user) {
        state.user = user;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
