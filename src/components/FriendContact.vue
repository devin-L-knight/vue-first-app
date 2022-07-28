<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ phoneNumber }}</li>
            <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend()">Delete</button>
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
            id: {
                type: String,
                required: true,
            },
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
        // emits is the counter part to props (these are custom events our component will at some point emmit) -- NOTE: can use an array or an object.
        // emits: ['toggle-favorite'],
        emits: [
        {
            'toggle-favorite': function(id) {
                if (id) {
                    return true;
                } else {
                    console.warn('ID is missing!');
                    return false;
                }
            }
        },
        'delete-friend'
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
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                // use a built-in method that can be called inside our component (emits a custom event that we can listen to when it's run in our parent component...)
                // this can take as many arguments as we want, but here we're passing the name of the event that's emitted as well as the id of the friend (is bound in the App.vue template where props are passed down)
                this.$emit('toggle-favorite', this.id);
            },
            deleteFriend() {
                this.$emit('delete-friend', this.id);
            }
        }
    }

</script>
