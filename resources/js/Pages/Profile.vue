<template>
    <div>
    <b-card shadow="true">
        <h2 class="h4">Your Profile</h2>
        <b-form @submit.prevent="logConsole()">
            <b-form-group label="Your name" label-for="first_name">
                <b-form-input
                    id="first_name"
                    v-model="first_name"
                    type="text"
                />
            </b-form-group>
            <div class="text-center">
                <b-button type="submit" variant="warning">
                    Save
                </b-button>
            </div>
        </b-form>
    </b-card>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Profile",
    data() {
        return {
            first_name: '',
        };
    },
    watch: {
        userFirstName(newUserName) {
            if (newUserName) {
                this.first_name = newUserName[0].first_name;
            } else {
                this.first_name = '';
            }
        },
    },
    methods: {
        logConsole(){
            console.log(this.first_name);
        },
        ...mapActions('profile', ['getUser'])
    },
    created: function () {
        this.getUser()
    },
    computed: {
        ...mapGetters('profile', {
            userFirstName: 'getUserInfo',
        }),
    },
}
</script>

<style scoped>

</style>
