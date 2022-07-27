import { createApp } from 'vue'
import App from './App.vue'

// imported Components:
import FriendContact from './components/FriendContact.vue';
import NewFriendForm from './components/NewFriendForm.vue';

// we create our app here.
const app = createApp(App);

// we include our components to the app object here
// the component method accepts two arguments...a string name of the component and an object (which is FriendContact)
app.component('friend-contact', FriendContact);
app.component('new-friend-form', NewFriendForm);

// we mount the app below the other logic.
app.mount('#app')
