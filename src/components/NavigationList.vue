<template>
  <div class="nav-box">
    <div v-for="(item, index) in navigationList" :key="index" class="nav-item one-item-center"
      @click="onPushPage(item.page)">
      <h3 class="nav-title">{{ item.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['navigationList'],
  emits: ['on-push'],
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    onPushPage(page) {
      this.$emit('on-push', page)
    }
  }
}
</script>

<style scoped>
.nav-box {
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  height: 70px;
  align-items: center;
}

.nav-title {
  color: cornflowerblue;
}

.nav-item {
  height: 100%;
  min-width: 150px;
}

.nav-item:hover {
  background: linear-gradient(#fff 80%, rgba(100, 148, 237, 0.2)) 20%;
  cursor: pointer;
}
</style>
