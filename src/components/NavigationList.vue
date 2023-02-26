<template>
  <div class="nav-box">
    <div v-for="(item, index) in navigationList" :key="index" class="nav-item one-item-center"
      @click="onPushPage(item.page)">
      <h3 class="nav-title">{{ item.name }}</h3>
    </div>
  </div>
</template>

<script>
import { store } from './../store'

export default {
  props: {
    navigationList: Array,
  },
  emits: ['on-push'],
  data() {
    return {
      store,
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

<style scoped lang="less">
.nav-box {
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  height: 60px;
  align-items: center;
}

.nav-item {
  height: 100%;
  min-width: 150px;

  .nav-title {
    color: cornflowerblue;
  }
}

.nav-item:hover {
  /* background: linear-gradient(#fff 80%, rgba(100, 148, 237, 0.2)) 20%; */
  // transform: scale(1.3, 1.3);
  cursor: pointer;

  .nav-title {
    color: rgba(100, 148, 237, 0.408);
  }
}
</style>
