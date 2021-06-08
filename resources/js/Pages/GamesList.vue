<template>
    <div>
        <h2 class="text-center text-white mb-3">Games List</h2>
        <div class="d-flex flex-wrap justify-content-around">
            <b-card v-for="game in gamesList" :key="game.id"
                :title="game.title"
                :img-src="domain + 'storage/uploads/images/original/' + (game.images[0] !== undefined ? game.images[0].title : 'default-game-image.png')"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-3"

            >
                <b-card-text>
                    {{game.description}}
                </b-card-text>

                <template #footer>
                    <div class="d-flex justify-content-center">
                        <router-link to="/my-games/add">
                    <b-button variant="primary" @click="setGameId(game.id)" :disabled="(checkIfAlreadyExists(game.id))">Add game to your profile</b-button>
                        </router-link>
                    </div>
                </template>
            </b-card>

            <div hidden>{{this.selectedGamesList.length}}</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "GamesList",
    data(){
        return {
            games: [],
            domain: 'http://127.0.0.1:8000/',
            selectedIds: [],
            addedGameId: null
        }
    },
    methods: {
        ...mapActions('games', ['getGames', 'getMySelectedGames', 'setAddedGameId']),
        getSelectedGamesIds(){
            for (let i = 0; i < this.selectedGamesList.length; i++) {
                if(!this.selectedIds.includes(this.selectedGamesList[i].game_id))
                this.selectedIds.push(this.selectedGamesList[i].game_id);
            }
            console.log(this.selectedIds);
        },
        checkIfAlreadyExists(gameId){
            if(this.selectedIds.includes(gameId)) return true;
        },
        setGameId(gameId){
            this.addedGameId = gameId;
            this.setAddedGameId(this.addedGameId);
        },

    },
    created: function () {
        this.getGames();
        this.getMySelectedGames();
    },
    computed: {
        ...mapGetters('games', {
            gamesList: 'getGamesList',
            selectedGamesList: 'getMyGamesList',
        }),
    },
    updated() {
        this.getSelectedGamesIds();
    }
}
</script>

<style scoped>
    .card-img-top{
        max-height: 180px;
        object-fit: cover;
    }
</style>
