<template>
    <div>
        <b-card title="Change game info" v-if="loader === true" class="text-center" shadow="true">
            <b-spinner variant="primary" v-show="loader" label="Loading..."></b-spinner>
        </b-card>
        <b-card :title="this.selectedGameAdd.title" v-else shadow="true" class="mb-3" style="width: 120%;">
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
                                <b-form-select-option v-for="rank in this.selectedGameAdd.ranks" :key="rank.id" :value="rank.id">{{rank.rank_name}}</b-form-select-option>
                            </b-form-select>
                        </b-form-group>
                    </div>
                </div>
                <b-alert v-model="showDismissibleAlertMessage" variant="success" dismissible>
                    Game Added!
                </b-alert>

                <div class="text-center mt-3">
                    <b-button type="submit" variant="primary">
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
    name: "AddGameInfo",
    data() {
        return {
            ingame_name: '',
            comment: '',
            rank_id: null,
            loader: true,
            showDismissibleAlertMessage: false,
        };
    },
    methods: {
        ...mapActions('games', ['createGameInfo', 'getUser']),
        logConsole() {
            console.log(this.getUserDetails);
        },
        handleSubmit() {
            this.createGameInfo({
                game_id: this.selectedGameAdd.id,
                user_id: this.getUserDetails.id,
                ingame_name: this.ingame_name,
                comment: this.comment,
                rank_id: this.rank_id,
            })
            this.showDismissibleAlertMessage = true;
            this.$router.push({name: 'MyGames'});
        },
    },
    created() {
        this.getUser();
    },
    mounted() {
        this.loader = false;
    },
    computed: {
        ...mapGetters('games', {
            selectedGameIdAdd: 'getAddedGameId',
            selectedGameAdd: 'getMySelectedGameForAdding',
            getUserDetails: 'getUserInfo'
        })
    }
}
</script>

<style scoped>

</style>
