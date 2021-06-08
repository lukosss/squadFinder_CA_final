export default {
    SAVE_GAMES(state, games) {
        state.games = games;
    },

    SAVE_MY_SELECTED_GAMES(state, mySelectedGames) {
        state.mySelectedGames = mySelectedGames;
    },

    SET_EDITED_GAME(state, id) {
        state.editedGameId = id;
    },

    SET_GAME_ID(state, id) {
        state.gameId = id;
    },

    SAVE_USER(state, user) {
        state.user = user[0];
    },

    SAVE_ERROR(state, errMsg) {
        state.errMsg = errMsg;
    },
};
