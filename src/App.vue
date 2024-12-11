<template>
  <WebViever initialDoc="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"/>
</template>

<script>
import WebViever from './components/WebViever.vue';

export default {
  name: 'App',
  components: {
    WebViever
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>