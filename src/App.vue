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
import http from './utils/request'
import { store } from './store'
import NavigationList from './components/NavigationList.vue';

export default {
  components: {
    NavigationList,
  },
  data() {
    return {
      store,
      navigationList: [
        { name: '首页', page: '/', },
        { name: 'blog', page: '/blog-type', list: 'blogTypeList' },
        { name: 'About Me', page: '/about-me' },
      ],
    }
  },
  mounted() {
    http.getRequest('/lala').then((data) => {
      this.requestInfo = data.msg
      this.store.setRequestInfo(data.msg)
    })
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
  height: 60px;
}
</style>
