<template>
    <div class="text-white">
        <h2>Find Squadmates</h2>
                <b-card v-for="gameUser in this.selectedGamesList" :key="gameUser.id" bg-variant="light" border-variant="primary" class="d-flex text-center mb-2">
                <div>
               Game: {{gameUser.game.title}}, Rank: {{gameUser.rank.rank_name}}, Nickname: {{gameUser.user.display_name ? gameUser.user.display_name : gameUser.user.first_name}}
                </div>
                <b-button size="sm" v-b-toggle="'info'+gameUser.id" variant="primary">Show contacts</b-button>
                    <b-collapse :id="'info'+gameUser.id" class="mt-2">
                        <b-card bg-variant="light">
                            <ul>
                                <li v-if="gameUser.ingame_name"><p class="card-text"> {{'Ingame Name: '+ gameUser.ingame_name }}</p></li>
                                <li v-if="gameUser.comment"><p class="card-text"> {{'Comment: '+ gameUser.comment }}</p></li>
                                <li v-if="gameUser.user.discord_username"><p class="card-text"> {{'Discord Username: '+ gameUser.user.discord_username }}</p></li>
                                <li v-if="gameUser.user.steam_username"><p class="card-text"> {{'Steam Username: '+ gameUser.user.steam_username }}</p></li>
                                <li v-if="gameUser.user.origin_username"><p class="card-text"> {{'Origin Username: '+ gameUser.user.origin_username }}</p></li>
                                <li v-if="gameUser.user.epic_username"><p class="card-text"> {{'Epic Games Username: '+ gameUser.user.epic_username }}</p></li>
                            </ul>

                        </b-card>
                    </b-collapse>
                </b-card>
    </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
name: "SquadList",
    methods: {
        ...mapActions('squads', ['getUsers', 'getSelectedGames'])
    },
    created: function () {
        this.getUsers();
        this.getSelectedGames();
    },
    computed: {
        ...mapGetters('squads', {
            usersList: 'getUsersList',
            selectedGamesList: 'getSelectedGamesList',
        }),
    },
}
</script>

<style scoped>

</style>
