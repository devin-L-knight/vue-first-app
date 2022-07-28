<template>
    <section>
        <h2><strong>Name: </strong>{{ userName }}</h2>
        <h3><strong>Age: </strong>{{ userAge }}</h3>
        <h3><strong>USER ID: </strong>{{ userId }}</h3>
    </section>
</template>

<script>
export default {
    // these are the props we accept from that are passed down from App.vue (where this data is defined / altered)
    props: {
        userId: {
            type: Number,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        userAge: {
            type: Number,
            required: true
        }
    }
}
</script>
