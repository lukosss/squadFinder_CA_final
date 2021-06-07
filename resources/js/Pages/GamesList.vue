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
                    <b-button href="#" variant="primary">Add game to your profile</b-button>
                    </div>
                </template>
            </b-card>
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
            domain: 'http://127.0.0.1:8000/'
        }
    },
    methods: {
        ...mapActions('games', ['getGames']),

    },
    created: function () {
        this.getGames()
    },
    computed: {
        ...mapGetters('games', {
            gamesList: 'getGamesList',
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
