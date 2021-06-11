<template>
    <div>
        <b-button v-b-modal.modal-1 variant="primary">Login</b-button>

        <b-modal id="modal-1" title="Login">
            <div>
                <b-form id="loginForm" @submit.prevent="onSubmit" v-if="show">
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
                </b-form>
            </div>
            <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
                Incorrect email or password.
            </b-alert>
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
            },
            show: true,
            showDismissibleAlert: false
        }
    },
    methods: {
        async onSubmit() {

            let self = this;

            await axios.post('/loginFront', {
                email: this.form.email,
                password: this.form.password
            })
                .then(function (response) {
                    window.location.href = '/home';
                })
                .catch(function (error) {
                    self.showDismissibleAlert = true;
                });
        },
    }
}

</script>

<style scoped>

</style>
