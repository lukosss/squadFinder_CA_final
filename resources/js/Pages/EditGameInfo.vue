<template>
    <div>
        <b-card title="Change game info" v-if="loader === true" class="text-center" shadow="true">
            <b-spinner variant="primary" v-show="loader" label="Loading..."></b-spinner>
        </b-card>
        <b-card :title="this.selectedGameForEditing.game.title" v-else shadow="true" class="mb-3" style="width: 120%;">
            <b-form @submit.prevent="handleSubmit()">
                <div class="d-flex justify-content-around">
                    <div>
                        <b-form-group label="Ingame Name" label-for="ingame_name">
                            <b-form-input
                                id="ingame_name"
                                v-model="ingame_name"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Comment" label-for="comment">
                            <b-form-input
                                id="comment"
                                v-model="comment"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Your Rank" label-for="rank_id">
                            <b-form-select v-model="rank_id">
                                <b-form-select-option :value="null">Please select an option</b-form-select-option>
                                <b-form-select-option v-for="rank in this.getRanks.ranks" :key="rank.id" :value="rank.id">{{rank.rank_name}}</b-form-select-option>
                            </b-form-select>
                        </b-form-group>
                    </div>
                </div>
                <b-alert v-model="showDismissibleAlertMessage" variant="success" dismissible>
                    Game Saved!
                </b-alert>

                <div class="text-center mt-3">
                    <b-button @click="logConsole" variant="primary">
                        Save
                    </b-button>
                </div>
            </b-form>
        </b-card>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: "EditGameInfo",
    data() {
        return {
            editedId: this.selectedGameIdEdit,
            ingame_name: '',
            comment: '',
            rank_id: null,
            loader: true,
            showDismissibleAlertMessage: false,
        };
    },
    methods: {
        ...mapActions('myGames', ['setEditedGameId', 'getMySelectedGames', 'setEditedGameId', 'setGameId']),
        logConsole() {
            console.log(this.selectedGameForEditing.game_id);
            console.log(this.getRanks.ranks);
        },
    },
    mounted() {
        this.setGameId(this.selectedGameForEditing.game_id);
        let selectedGame = this.selectedGameForEditing;
        this.ingame_name = selectedGame.ingame_name;
        this.comment = selectedGame.comment;
        this.rank_id = selectedGame.rank_id;
        this.loader = false;

    },
    computed: {
        ...mapGetters('myGames', {
            gamesList: 'getGamesList',
            myGames: 'getMyGamesList',
            selectedGameIdEdit: 'getEditedGameId',
            selectedGameForEditing: 'getMySelectedGameForEditing',
            getRanks: 'getSelectedGameRanks'
        }),
    }
}
</script>

<style scoped>

</style>
