<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2>
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
        // our component can accept the props that have been passed in (accepted as an array OR an object)
        // props: [
        //     'id',
        //     'name',
        //     'phoneNumber',
        //     'emailAddress',
        //     'isFavorite'
        // ],
        props: {
            id: String,
            name: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: String,
                required: true,
            },
            emailAddress: {
                type: String,
                required: true,
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false, // (if not required, you can provide a default value that can be used. In our case, we'll set this default to '0')
                // validator: function(value) {
                //     return value === '1' || value === '0';
                // }
            }
        },
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
                this.friendIsFavorite = !this.friendIsFavorite;
            }
        }
    }

</script>
