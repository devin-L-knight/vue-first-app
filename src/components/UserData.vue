<template>
<!-- use submit.prevent to prevent the default behavior from refreshing the entire screen -->
    <form @submit.prevent='submitForm'>
        <input type="text" placeholder="Enter Name" v-model='inputUserName'>
        <input type="text" placeholder="Enger Age" v-model='inputUserAge'>
        <button>Add User</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputUserName: '',
            inputUserAge: 0
        }
    }, 
    methods: {
        submitForm() {
        // create a new object with the submitted data
        const submittedData = {
            userName: this.inputUserName,
            userAge: parseInt(this.inputUserAge)
        }
        this.$emit('create-new-user', submittedData);   // transmit the info back to App.vue with the submitted data

        // clear the form fields by resetting everything to original state
        this.inputUserName = '';
        this.inputUserAge = 0;
        }
    }
}
</script>
