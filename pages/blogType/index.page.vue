<template>
  <div class="blog-type-content">
    <Link href="/blogType/es6" :title="'es6'" flexType="flex-start"/>
    <Link href="/blogType/es6/Promise（es6笔记）" :title="'Promise（es6笔记）'" flexType="flex-start"/>
  </div>
</template>

<script>
import Link from '../../components/Link.vue'

export default {
  data() {
    return {}
  },
  components: {
    Link,
  },
  mounted() { },
  methods: {}
}
</script>

<style scoped>
.blog-type-content{
  height: 100px;
}
</style>