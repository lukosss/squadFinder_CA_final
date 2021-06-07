export default {
    SAVE_GAMES(state, games) {
        state.games = games;
    },

    SAVE_SELECTED_GAMES(state, selectedGames) {
        state.selectedGames = selectedGames;
    },

    SAVE_USERS(state, users) {
        state.users = users;
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
