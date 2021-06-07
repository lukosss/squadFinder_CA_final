export default {
    SAVE_USERS(state, users) {
        state.users = users;
    },

    SAVE_SELECTED_GAMES(state, selectedGames) {
        state.selectedGames = selectedGames;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
