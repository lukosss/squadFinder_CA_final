<template>
    <div>
        <b-button v-b-modal.modal-2 variant="primary" class="ml-3">Register</b-button>

        <b-modal id="modal-2" title="Register">
            <div>
                <ValidationObserver v-slot="{handleSubmit}">
                    <b-form id="registerForm" @submit.prevent="handleSubmit(onSubmit)">
                        <ValidationProvider name="email" rules="required|email" v-slot="{errors}">
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
                                <span class="text-warning small">{{ errors[0] }}</span>
                            </b-form-group>
                        </ValidationProvider>
                        <ValidationProvider name="password" rules="required|confirmed:confirmation|min:6|max:20"
                                            v-slot="{errors}">
                            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                                <b-form-input
                                    id="input-2"
                                    v-model="form.password"
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                ></b-form-input>
                                <span class="text-warning small">{{ errors[0] }}</span>
                            </b-form-group>
                        </ValidationProvider>
                        <ValidationProvider name="passwordConfirm" rules="required" v-slot="{errors}"
                                            vid="confirmation">
                            <b-form-group id="input-group-3" label="Confirm Password:" label-for="input-3">
                                <b-form-input
                                    id="input-3"
                                    v-model="form.confirmPassword"
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </ValidationProvider>
                    </b-form>
                </ValidationObserver>
            </div>
            <template #modal-footer>
                <b-button type="submit" form="registerForm" variant="primary">Submit</b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>

export default {
    name: "Register",
    data() {
        return {
            form: {
                email: '',
                password: '',
                confirmPassword: ''
            },
        }
    },
    methods: {
        onSubmit() {
            console.log(this.form);
        },

    }
}

</script>

<style scoped>

</style>
