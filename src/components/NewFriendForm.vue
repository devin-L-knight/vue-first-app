<template>
    <form action="" class="form__new-friend" @submit.prevent='submitForm'>
        <header>Add a new friend:</header>
        <div class="form-fields">
            <div class='form-row'>
                <div class='form__single-input'>
                    <label>First</label>
                    <input type="text" v-model='enteredFirstName'>
                </div>
                <div class='form__single-input'>
                    <label>Last</label>
                    <input type="text" v-model='enteredLastName'>
                </div>
            </div>
            <div class='form-row'>
                <div class='form__single-input'>
                    <label>Phone</label>
                    <input type="text" v-model='enteredPhone'>
                </div>
                    <div class='form__single-input'>
                    <label>Email</label>
                    <input type="text" v-model='enteredEmail'>
                </div>
            </div>
        </div>
        <button>Add Friend</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                enteredFirstName: '',
                enteredLastName: '',
                enteredFullName: '',
                enteredPhone: '',
                enteredEmail: ''
            }
        },
        emits: ['create-new-contact'],
        methods: {
            submitForm() {
                const submittedData = {
                    firstName: this.enteredFirstName,
                    lastName: this.enteredLastName,
                    fullname: `${this.enteredFirstName} ${this.enteredLastName}`,
                    phone: this.enteredPhone,
                    email: this.enteredEmail
                }
                // console.log('FORM DATA >>>> ', submittedData);
                this.$emit('create-new-contact', submittedData)

                // clear the form fields by resetting everything to original state
                this.enteredFirstName = '';
                this.enteredLastName = '';
                this.enteredFullName = '';
                this.enteredPhone = '';
                this.enteredEmail = '';
            }
        }
    }
</script>

<style>
    .form-fields {
        margin-bottom: 1rem;
    }

    .form-row {
        margin: 0.25rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .form__single-input {
        margin-right: 16px;
    }

    .form__new-friend {
            background-color: lightgray;
    }

    label {
            margin-right: 0.5rem;
    }
</style>