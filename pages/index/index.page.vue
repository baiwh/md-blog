<!-- <template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>
</template>

<script setup>
import Counter from './Counter.vue'
</script> -->

<template>
  <div>
    home:{{ lala }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      lala: '111',
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
