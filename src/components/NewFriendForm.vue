<template>
    <form action="" class="form__new-friend">
        <header>Add a new friend:</header>
        <div class="form-fields">
            <div class='form-row'>
                <div class='form__single-input'>
                    <label>First</label>
                    <input type="text" value="">
                </div>
                <div class='form__single-input'>
                    <label>Last</label>
                    <input type="text" value="">
                </div>
            </div>
            <div class='form-row'>
                <div class='form__single-input'>
                    <label>Phone</label>
                    <input type="text" value="">
                </div>
                    <div class='form__single-input'>
                    <label>Email</label>
                    <input type="text" value="">
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

            }
        },
        methods: {
            createEntry() {

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