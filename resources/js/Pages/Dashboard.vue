<template>
    <div>
        <h2 class="text-white text-center">Dashboard</h2>
        <div>

            <div v-if="loader === true" class="text-center">
                <b-spinner variant="primary" v-show="loader" label="Loading..."></b-spinner>
            </div>

            <div v-else>
                <b-card class="mb-3"
                        bg-variant="dark"
                        text-variant="white"
                        border-variant="primary"
                >
                    <b-card-text class="h3 font-weight-bold text-shadow">
                        Currently {{ (this.usersList).length }} players looking for squad
                        <b-button class="float-right ml-3" variant="primary"
                                  @click="$router.push({name: 'SquadsList'});">Find Your Squad
                        </b-button>
                    </b-card-text>
                </b-card>

                <b-card class="mb-3"
                        bg-variant="dark"
                        text-variant="white"
                        border-variant="primary"
                >
                    <b-card-text class="h3 font-weight-bold text-shadow">
                        Currently {{ this.popularGame.title }} is the most played game
                        <b-button class="float-right ml-3" variant="primary"
                                  @click="$router.push({name: 'SquadsList'});">Find Your Squad
                        </b-button>
                    </b-card-text>
                </b-card>

                <b-card class="mb-3"
                        bg-variant="dark"
                        text-variant="white"
                        border-variant="primary"
                >
                    <b-card-text class="h3 font-weight-bold text-shadow">
                        Currently there are {{ (this.gamesList).length }} games to choose from
                        <b-button class="float-right ml-3" variant="primary"
                                  @click="$router.push({name: 'GamesList'});">Select Your Games
                        </b-button>
                    </b-card-text>
                </b-card>

                <b-card class="mb-3"
                        bg-variant="dark"
                        text-variant="white"
                        border-variant="primary"
                        v-for="game in currentGames" :key="game.id"
                >
                    <b-card-text class="h3 font-weight-bold text-shadow">
                        Currently {{ game.number }} players on {{ game.title }}
                        <b-button class="float-right ml-3" variant="primary"
                                  @click="$router.push({name: 'GamesList'});">Add Game
                        </b-button>
                    </b-card-text>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
    name: "Dashboard",
    data() {
        return {
            games: [],
            users: [],
            currentGames: [],
            loader: true,
            popularGame: [],
        }
    },
    methods: {
        ...mapActions('dashboard', ['getGames', 'getUsers', 'getSelectedGames']),
        logConsole() {

            console.log(popularGame);
        },
        countGames() {
            function gameExists(title, arr) {
                return arr.some(function (el) {
                    return el.title === title;
                })
            }

            for (let i = 0; i < this.selectedGamesList.length; i++) {
                if (!gameExists(this.selectedGamesList[i].game.title, this.currentGames)) {
                    this.currentGames.push({title: this.selectedGamesList[i].game.title, number: 1})
                } else {
                    let selectedGame = this.selectedGamesList[i].game.title;
                    let selectedGameIndex = this.currentGames.findIndex(x => x.title == selectedGame);
                    this.currentGames[selectedGameIndex].number++
                }
            }
            this.popularGame = this.currentGames.reduce((prev, current) => (prev.number > current.number) ? prev : current, 1)
            this.loader = false

        },

    },
    watch: {
        selectedGamesList() {
            this.countGames();
        },
    },
    created: function () {
        this.getUsers();
        this.getGames();
        this.getSelectedGames();
    },
    computed: {
        ...mapGetters('dashboard', {
            gamesList: 'getGamesList',
            usersList: 'getUsersList',
            selectedGamesList: 'getSelectedGamesList',
        }),
    },
}
</script>

<style scoped>
.text-shadow {
    text-shadow: 4px 4px 7px rgba(150, 150, 150, 1);
}
</style>
