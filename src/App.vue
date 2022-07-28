<template>
  <section>
    <header><h1>My Friends</h1></header>
    <new-friend-form @create-new-contact='addNewContact'></new-friend-form>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key='friend.id'
        :id='friend.id'
        :name='friend.name'
        :phone-number='friend.phone'
        :email-address='friend.email'
        v-bind:is-favorite='friend.isFavorite'
        @toggle-favorite='toggleFavoriteStatus'
        @delete-friend='removeFriendFromList'
      ></friend-contact>
    </ul>
  </section>
  <!-- Here we'll include a section that will render our components from assignment 1 -->
  <section class="assignment-section">
    <header><h1>Assignment 1:</h1></header>
      <!-- v-for="user in users" -->
    <active-user
      :userId="user.id"
      :userName="user.name"
      :userAge="user.age"
    ></active-user>
    <user-data
      @create-new-user='addNewUser'
    ></user-data>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        friends: [
          {
            id: 'manuel',
            name: 'Manuel Lorenz',
            phone: '310-555-5555',
            email: 'manuel@localhost.com',
            isFavorite: true
          },
          {
            id: 'julie',
            name: 'Julie Jones',
            phone: '818-555-5522',
            email: 'julie-jones@localhost.com',
            isFavorite: false
          },
          {
            id: 'bob',
            name: 'Bob Jones',
            phone: '225-888-4554',
            email: 'Bobby@email.com',
            isFavorite: false
          }
        ],
        // users: [
          user: {
            id: 44,
            name: 'name example',
            age: 34
          }
        // ]
      }
    },
    methods: {
      toggleFavoriteStatus(friendId) {
        const locatedFriend = this.friends.find(friend => friend.id === friendId);
        locatedFriend.isFavorite = !locatedFriend.isFavorite;
      },
      addNewContact(formData) {
        // console.log('add new contact called?', formData);

        const newFriend = {
          id: new Date().toISOString(), // this will provide a unique enough string to serve as our ID
          name: formData.fullname,
          phone: formData.phone,
          email: formData.email,
          isFavorite: false
        }

        // add our newly created Friend to our array of Friends.
        this.friends.push(newFriend);

      },
      removeFriendFromList(friendId) {
        // reassign the array to a copy of itself with the friend filtered out by the id
        this.friends = this.friends.filter((friend) => {
          return friend.id !== friendId; // checking for non-equality, becase we want to keep friends with IDs that do not match what we want to remove
        })

      },
      // create a new method to generate a new user ID:
      generateNewUserId() {
        let newId = Math.floor(Math.random() * 1000) + 1;
        return newId
      },
      addNewUser(data) {
        const newUser = {
            id: this.generateNewUserId(),
            name: data.userName,
            age: data.userAge
        }
        console.log('NEW USER CREATED >>>> ', newUser);
      }

    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Jost', sans-serif;
  }

  body {
    margin: 0;
  }

  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #app li, form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }

  #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
  }

  #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }

  #app button:hover,
  #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }

  .assignment-section {
    align-items: center;
    border-top: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
  }
</style>