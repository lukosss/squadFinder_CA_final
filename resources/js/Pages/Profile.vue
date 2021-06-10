<template>
    <div>
        <b-card title="Your Profile" v-if="loader === true" class="text-center" shadow="true">
            <b-spinner variant="primary" v-show="loader" label="Loading..."></b-spinner>
        </b-card>
        <b-card title="Your Profile" v-else shadow="true" class="mb-3" style="width: 120%;">
            <b-form @submit.prevent="handleSubmit()">
                <div class="d-flex justify-content-around">
                    <div>
                        <b-form-group label="Name" label-for="first_name">
                            <b-form-input
                                id="first_name"
                                v-model="first_name"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Email" label-for="email">
                            <b-form-input
                                id="email"
                                v-model="email"
                                type="email"
                            />
                        </b-form-group>

                        <b-form-group label="Last Name" label-for="last_name">
                            <b-form-input
                                id="last_name"
                                v-model="last_name"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Display Name" label-for="display_name">
                            <b-form-input
                                id="display_name"
                                v-model="display_name"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Your City" label-for="city_id">
                            <b-form-select v-model="selected_city">
                                <b-form-select-option :value="null">Please select an option</b-form-select-option>
                                <b-form-select-option v-for="city in this.citiesList" :key="city.id" :value="city.id">
                                    {{ city.city_name }}
                                </b-form-select-option>
                            </b-form-select>
                        </b-form-group>
                    </div>

                    <div class="vertical-line">
                    </div>

                    <div>
                        <b-form-group label="Bio" label-for="bio">
                            <b-form-input
                                id="bio"
                                v-model="bio"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Discord Username" label-for="discord_username">
                            <b-form-input
                                id="discord_username"
                                v-model="discord_username"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Steam Username" label-for="steam_username">
                            <b-form-input
                                id="steam_username"
                                v-model="steam_username"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Epic Games Username" label-for="epic_username">
                            <b-form-input
                                id="epic_username"
                                v-model="epic_username"
                                type="text"
                            />
                        </b-form-group>

                        <b-form-group label="Origin Username" label-for="origin_username">
                            <b-form-input
                                id="origin_username"
                                v-model="origin_username"
                                type="text"
                            />
                        </b-form-group>
                    </div>
                </div>

<!--                <b-form-group label="Profile Logo" label-for="images">-->
<!--                    <b-form-file-->
<!--                        v-model="file1"-->
<!--                        :state="Boolean(file1)"-->
<!--                        id="images"-->
<!--                        placeholder="Choose a file or drop it here..."-->
<!--                        drop-placeholder="Drop file here..."-->
<!--                    ></b-form-file>-->
<!--                    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>-->
<!--                    <div class="mt-3" v-if="file1 !== null">Current image:-->
<!--                        <b-img :src="domain + 'storage/uploads/images/thumb/'+file1"></b-img>-->
<!--                    </div>-->
<!--                </b-form-group>-->
                <b-alert v-model="showDismissibleAlertMessage" variant="success" dismissible>
                    Profile Saved!
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

import {mapGetters, mapActions} from 'vuex';

export default {
    name: "Profile",
    data() {
        return {
            userId: null,
            first_name: '',
            oldEmail: '',
            email: '',
            password: '',
            last_name: '',
            display_name: '',
            bio: '',
            discord_username: '',
            steam_username: '',
            epic_username: '',
            origin_username: '',
            selected_city: null,
            loader: true,
            file1: null,
            showDismissibleAlertMessage: false,
            domain: 'http://127.0.0.1:8000/'
        };
    },
    watch: {
        userFirstName(newUser) {
            if (newUser) {
                this.first_name = newUser.first_name;
                this.email = newUser.email;
                this.userId = newUser.id;
                this.last_name = newUser.last_name;
                this.display_name = newUser.display_name;
                this.bio = newUser.bio;
                this.discord_username = newUser.discord_username;
                this.steam_username = newUser.steam_username;
                this.epic_username = newUser.epic_username;
                this.origin_username = newUser.origin_username;
                this.selected_city = newUser.city_id;
                if (newUser.images.length > 0) {
                    this.file1 = newUser.images[0].title;
                }
                this.loader = false;
            } else {
                this.first_name = '';
                this.email = '';
                this.userId = '';
                this.last_name = '';
                this.display_name = '';
                this.bio = '';
                this.discord_username = '';
                this.steam_username = '';
                this.epic_username = '';
                this.origin_username = '';
                this.selected_city = null;
                this.loader = false;
                // this.file1 = null;
            }
        },
    },
    methods: {
        logConsole() {
            console.log(this.file1)
        },
        handleSubmit() {
            // if (this.file1 !== null || this.userFirstName.images[0].title !== this.file1) {
                this.updateUser({
                    first_name: this.first_name,
                    email: this.email,
                    last_name: this.last_name,
                    display_name: this.display_name,
                    bio: this.bio,
                    discord_username: this.discord_username,
                    steam_username: this.steam_username,
                    epic_username: this.epic_username,
                    origin_username: this.origin_username,
                    city_id: this.selected_city,
                    // images: this.file1,
                })
            // } else {
            //     this.updateUser({
            //         first_name: this.first_name,
            //         email: this.email,
            //         last_name: this.last_name,
            //         display_name: this.display_name,
            //         bio: this.bio,
            //         discord_username: this.discord_username,
            //         steam_username: this.steam_username,
            //         epic_username: this.epic_username,
            //         origin_username: this.origin_username,
            //         city_id: this.selected_city,
            //     })
            // }
            this.showDismissibleAlertMessage = true;
        },
        ...mapActions('profile', ['getUser', 'updateUser', 'getCities'])
    },
    created: function () {
        this.getUser();
        this.getCities();
    },
    computed: {
        ...mapGetters('profile', {
            userFirstName: 'getUserInfo',
            citiesList: 'getCities'
        }),
    },
}
</script>

<style scoped>
.vertical-line {
    display: inline-block;
    border-left: 1px solid #ccc;
    margin: 0 10px;
    height: auto;
}
</style>
