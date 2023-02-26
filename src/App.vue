<template>
  <navigation-list :navigationList="navigationList" @on-push="onPush" />
  <router-view class="content-box" />
  <footer class="footer-box one-item-center">
    <a href="https://beian.miit.gov.cn/" target="_blank">
      ICP 备111号
    </a>
  </footer>
</template>

<script>
import NavigationList from './components/NavigationList.vue';
export default {
  components: {
    NavigationList,
  },
  data() {
    return {
      navigationList: [
        { name: '首页', page: '/', },
        { name: 'blog', page: '/blog-type' },
        { name: 'About Me', page: '/about-me' },
      ]
    }
  },
  mounted() {
  },
  methods: {
    onPush(value) {
      this.$router.push(value)
    }
  }
}
</script>

<style scoped>
.content-box {
  flex: 1;
}

.footer-box {
  border-top: 1px solid #dcdcdc;
  height: 70px;
}
</style>
