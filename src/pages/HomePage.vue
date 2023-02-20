<template>
  <div>
    hello：{{ requestInfo }}
  </div>
</template>

<script>
import http from './../utils/request'
export default {
  data() {
    return {
      requestInfo: ''
    }
  },
  mounted() {
    http.getRequest('/lala').then((data) => {
      this.requestInfo = data.msg
    })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
