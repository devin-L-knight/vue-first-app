<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        friends: [
          // {
          //   id: 'manuel',
          //   name: 'Manuel Lorenz',
          //   phone: '310-555-5555',
          //   email: 'manuel@localhost.com'
          // },
          {
            id: 'julie',
            name: 'Julie Jones',
            phone: '818-555-5522',
            email: 'julie-jones@localhost.com'
          }
        ],
      }
    }
  }
</script>
