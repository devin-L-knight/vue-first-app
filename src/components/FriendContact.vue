<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        // our component can accept the props that have been passed in (accepted as an array)
        props: [
            'name',
            'phoneNumber',
            'emailAddress'
        ],
        data() {
            return {
                detailsAreVisible: false,
                friend: {
                    // id: 'manuel',
                    // name: 'Manuel Lorenz',
                    // phone: '310-555-5555',
                    // email: 'manuel@localhost.com'
                },
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    }

</script>
