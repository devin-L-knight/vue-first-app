<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
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
            'id',
            'name',
            'phoneNumber',
            'emailAddress',
            'isFavorite'
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
                // set a new data value to be equal to the passed prop value
                friendIsFavorite: this.isFavorite
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                if (this.friendIsFavorite === '1') {
                    this.friendIsFavorite = '0';
                } else {
                    this.friendIsFavorite = '1';
                }
            }
        }
    }

</script>
