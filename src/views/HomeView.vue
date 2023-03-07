<template>
  <div class="home">
    <h1>Hola mundo</h1>
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'daybook' });
    }
  }
}
</script>
