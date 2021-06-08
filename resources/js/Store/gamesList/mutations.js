export default {
    SAVE_GAMES(state, games) {
        state.games = games;
    },

    SAVE_MY_SELECTED_GAMES(state, mySelectedGames) {
        state.mySelectedGames = mySelectedGames;
    },

    SET_ADDED_GAME(state, id) {
        state.addedGameId = id;
    },

    SAVE_USER(state, user) {
        state.user = user[0];
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
