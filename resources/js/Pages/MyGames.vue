<template>
    <div>
        <h2 class="text-center text-white mb-3">My Games</h2>
        <div class="d-flex flex-wrap justify-content-around">
            <b-card no-body class="overflow-hidden mb-3 mr-2" style="max-width: 540px;" v-for="game in this.myGames" :key="game.id"
            bg-variant="dark" border-variant="primary" text-variant="white">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img :src="domain + 'storage/uploads/images/original/' + 'default-game-image.png'" alt="Image" class="rounded-0"></b-card-img>
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
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "MyGames",
    data(){
        return {
            domain: 'http://127.0.0.1:8000/',
            selectedGameId: null,
        }
    },
    methods: {
        ...mapActions('myGames', ['getGames', 'getMySelectedGames', 'setEditedGameId']),
        selectEditedGame(id){
            this.setEditedGameId(id)
            console.log(this.selectedGameIdEdit)
        }
    },
    created: function () {
        this.getGames();
        this.getMySelectedGames();
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
