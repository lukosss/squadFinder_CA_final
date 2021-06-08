export default {
    getGamesList: (state) => state.games,

    getMyGamesList: (state) => state.mySelectedGames,

    getAddedGameId: (state) => state.addedGameId,

    getMySelectedGameForAdding: (state) => state.games
        .find(({ id }) => id === state.addedGameId) ?? false,

    getUserInfo: (state) => state.user,
};

