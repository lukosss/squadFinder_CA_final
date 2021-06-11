<template>
    <div class="text-white">
        <h2 class="text-center">Find Squadmates</h2>
        <div class="overflow-auto text-white row">
            <div class="d-flex align-items-center justify-content-center col-12">
                <div class="my-1 w-50">
                    <b-form-group
                        label="Filter"
                        label-for="filter-input"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        class="mb-0"
                    >
                        <b-input-group size="sm">
                            <b-form-input
                                id="filter-input"
                                v-model="filter"
                                type="search"
                                placeholder="Type to Search"
                            ></b-form-input>

                            <b-input-group-append>
                                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                            </b-input-group-append>
                        </b-input-group>
                    </b-form-group>
                </div>
                <div class="my-1 ml-2 w-75">
                    <b-form-group
                        v-model="sortDirection"
                        label="Filter On:"
                        description="Leave all unchecked to search all data"
                        label-cols-sm="3"
                        label-align-sm="right"
                        label-size="sm"
                        class="mb-0"
                        v-slot="{ ariaDescribedby }"
                    >
                        <b-form-checkbox-group
                            v-model="filterOn"
                            :aria-describedby="ariaDescribedby"
                            class="mt-1 d-flex align-items-center"
                        >
                            <b-form-checkbox value="gameName">Game</b-form-checkbox>
                            <b-form-checkbox value="rank">Rank</b-form-checkbox>
                            <b-form-checkbox value="userName">Username</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group>
                </div>
            </div>
            <b-table id="my-table" striped hover table-variant="dark" bordered :busy="isBusy" :fields="fields"
                     :items="this.selectedGamesList" class="text-white col-12"
                     responsive="true" :per-page="perPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                     sort-icon-left @filtered="onFiltered" :filter="filter"
                     :filter-included-fields="filterOn"
                     :current-page="currentPage">

                <template #cell(gameName)="data">
                    <p class="text-white">{{ data.value }}</p>
                </template>

                <template #cell(rank)="data">
                    <p class="text-white">{{ data.value }}</p>
                </template>

                <template #cell(userName)="data">
                    <p class="text-white">{{ data.value }}</p>
                </template>

                <template #cell(userInfo)="data">
                    <b-button :id="data.item.id+'popover'" variant="primary">
                        Show <i class="far fa-address-book"></i>
                    </b-button>
                    <b-popover :target="data.item.id+'popover'" triggers="hover" placement="left">
                        <template #title>
                            {{ data.item.user.display_name ? data.item.user.display_name : data.item.user.first_name }}
                        </template>
                        <ul>
                            <li v-if="data.item.ingame_name"><p class="card-text">
                                {{ 'Ingame Name: ' + data.item.ingame_name }}</p></li>
                            <li v-if="data.item.comment"><p class="card-text"> {{ 'Comment: ' + data.item.comment }}</p>
                            </li>
                            <li v-if="data.item.user.discord_username"><p class="card-text">
                                {{ 'Discord Username: ' + data.item.user.discord_username }}</p></li>
                            <li v-if="data.item.user.steam_username"><p class="card-text">
                                {{ 'Steam Username: ' + data.item.user.steam_username }}</p></li>
                            <li v-if="data.item.user.origin_username"><p class="card-text">
                                {{ 'Origin Username: ' + data.item.user.origin_username }}</p></li>
                            <li v-if="data.item.user.epic_username"><p class="card-text">
                                {{ 'Epic Games Username: ' + data.item.user.epic_username }}</p></li>
                        </ul>
                    </b-popover>
                </template>

                <template #table-busy>
                    <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle text-primary"></b-spinner>
                        <strong class="text-warning">Loading...</strong>
                    </div>
                </template>

            </b-table>

            <b-pagination
                pills
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>
        </div>
    </div>

</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
    name: "SquadList",
    data() {
        return {
            sortBy: 'userName',
            sortDesc: false,
            perPage: 10,
            currentPage: 1,
            fields: [
                {
                    key: 'gameName',
                    label: 'Game Title',
                    sortable: true,
                    sortByFormatted: true,
                    filterByFormatted: true,
                    formatter: (value, key, item) => {
                        return item.game.title;
                    }
                },
                {
                    key: 'rank', label: 'Rank', sortable: true, sortByFormatted: true, filterByFormatted: true,
                    formatter: (value, key, item) => {
                        return item.rank.rank_name;
                    }
                },
                {
                    key: 'userName', label: 'User', sortable: true, sortByFormatted: true, filterByFormatted: true,
                    formatter: (value, key, item) => {
                        return item.user.display_name ? item.user.display_name : item.user.first_name;
                    }
                },
                {key: 'userInfo', label: 'Contacts'}
            ],
            isBusy: true,
            filter: null,
            filterOn: [],
            sortDirection: 'asc',
        }
    },
    methods: {
        ...mapActions('squads', ['getUsers', 'getSelectedGames']),
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            this.currentPage = 1
        }
    },
    created: function () {
        this.getUsers();
        this.getSelectedGames();
    },
    updated() {
        this.isBusy = false;
    },
    computed: {
        ...mapGetters('squads', {
            usersList: 'getUsersList',
            selectedGamesList: 'getSelectedGamesList',
        }),
        rows() {
            return this.selectedGamesList.length
        },
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter(f => f.sortable)
                .map(f => {
                    return {text: f.label, value: f.key}
                })
        }
    },
}
</script>

<style scoped>

</style>
