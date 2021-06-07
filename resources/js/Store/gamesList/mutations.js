export default {
    SAVE_GAMES(state, games) {
        state.games = games;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
