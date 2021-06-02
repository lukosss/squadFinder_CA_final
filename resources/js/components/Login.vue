<template>
    <div>
        <b-button v-b-modal.modal-1 variant="primary">Login</b-button>

        <b-modal id="modal-1" title="Login">
            <div>
                <b-form id="loginForm" @submit="onSubmit" v-if="show">
                    <b-form-group
                        id="input-group-1"
                        label="Email address:"
                        label-for="input-1"
                        description="We'll never share your email with anyone else."
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.email"
                            type="email"
                            placeholder="Enter email"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                        <b-form-input
                            id="input-2"
                            v-model="form.password"
                            type="password"
                            placeholder="Enter password"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <div>
                        <b-form-checkbox v-model="form.checked" name="check-button" switch>
                            Remember me on this PC
                        </b-form-checkbox>
                    </div>
                </b-form>
            </div>
            <template #modal-footer>
                <b-button type="submit" form="loginForm" variant="primary">Submit</b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            form: {
                email: '',
                password: '',
                checked: false,
            },
            show: true
        }
    },
    methods: {
        onSubmit() {
            axios.post('/login', {
                email: this.form.email,
                password: this.form.password
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
}

</script>

<style scoped>

</style>
