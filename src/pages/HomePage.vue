<template>
  <div>
    store:{{ store.requestInfo }}
  </div>
</template>

<script>
import { store } from './../store'

export default {
  data() {
    return {
      store,
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
