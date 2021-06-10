<template>
    <div>
        <h2 class="text-center text-white mb-3">My Games</h2>
        <b-spinner v-if="loader" variant="primary" v-show="loader" label="Loading..."></b-spinner>
        <div v-else class="d-flex flex-wrap justify-content-around">
            <b-card no-body class="overflow-hidden mb-3 mr-2" style="max-width: 540px" v-for="game in this.myGames" :key="game.id"
            bg-variant="dark" border-variant="primary" text-variant="white">
                <b-row no-gutters>
                    <b-col md="6" class="d-flex justify-content-center align-items-center">
                        <b-card-img style="max-height: 180px; object-fit: cover;" :src="domain + 'storage/uploads/images/original/' + (getImage(game.game.id) !== undefined ? getImage(game.game.id) : 'default-game-image.png')" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body :title="game.game.title">
                            <b-dropdown-divider style="list-style-type: none;"></b-dropdown-divider>
                <b-card-text class="d-flex justify-content-center flex-column">
                    <ul class="pl-3">
                        <li>
                            Ingame Name: {{game.ingame_name}}
                        </li>
                        <li>
                            Rank: {{game.rank.rank_name}}
                        </li>
                        <li>
                            Comment: {{game.comment}}
                        </li>
                    </ul>
                    <div class="d-flex justify-content-center">
                        <router-link to="/my-games/edit">
                            <p class="btn btn-primary mb-0" @click="selectEditedGame(game.id)">Edit</p>
                        </router-link>
                    </div>
                </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: "MyGames",
    data(){
        return {
            domain: 'http://127.0.0.1:8000/',
            selectedGameId: null,
            loader: true,
            gameImageName: '',
        }
    },
    methods: {
        ...mapActions('myGames', ['getGames', 'getMySelectedGames', 'setEditedGameId']),
        selectEditedGame(id){
            this.setEditedGameId(id)
        },
        getImage(id) {
            for (let i = 0; i < this.gamesList.length; i++) {
                if (this.gamesList[i].id === id && this.gamesList[i].images.length > 0) {
                    return this.gamesList[i].images[0].title;
                }
            }
        }
    },
    created() {
        this.getGames();
        this.getMySelectedGames();
    },
    mounted() {
        this.loader = false;
    },
    computed: {
        ...mapGetters('myGames', {
            gamesList: 'getGamesList',
            myGames: 'getMyGamesList',
            selectedGameIdEdit: 'getEditedGameId',
        }),
    },
}
</script>

<style scoped>
.card-img-top{
    max-height: 180px;
    object-fit: cover;
}
</style>
