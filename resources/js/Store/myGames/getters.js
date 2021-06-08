export default {
    getGamesList: (state) => state.games,

    getMyGamesList: (state) => state.mySelectedGames,

    getMySelectedGameForEditing: (state) => state.mySelectedGames
    .find(({ id }) => id === state.editedGameId) ?? false,

    getSelectedGameRanks: (state) => state.games
        .find(({ id }) => id === state.gameId) ?? false,

    getEditedGameId: (state) => state.editedGameId,

    getUserInfo: (state) => state.user,
};

