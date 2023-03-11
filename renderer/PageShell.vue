<template>
  <div class="layout">
    <div class="nav-box">
      <Link class="nav-item one-item-center" v-for="(item, index) in navigationList" :key="index" :href="item.page">
      <h3 class="nav-title">{{ item.name }}</h3>
      </Link>
    </div>

    <div class="content-box">
      <slot />
    </div>

    <footer class="footer-box one-item-center">
      <a href="https://beian.miit.gov.cn/" target="_blank">
        ICP 备111号
      </a>
    </footer>
  </div>
</template>

<script setup>
import Link from './Link.vue'
import './../src/assets/main.css'

const navigationList = [
  { name: '首页', page: '/', },
  { name: 'blog', page: '/blogType' },
  { name: 'About Me', page: '/aboutMe' },
]

</script>

<style scoped lang="less">
.layout {
  min-height: 100vh;
  display: flex;
  padding: 0 5vw;
  flex-direction: column;
}

.nav-box {
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  height: 60px;
  align-items: center;

  .nav-item {
    height: 100%;
    min-width: 150px;

    .nav-title {
      color: cornflowerblue;
    }
  }

  .nav-item:hover {
    cursor: pointer;

    .nav-title {
      color: rgba(100, 148, 237, 0.408);
    }
  }
}

.content-box {
  flex: 1;
}

.footer-box {
  border-top: 1px solid #dcdcdc;
  height: 60px;

  a:hover {
    /* background-color: hsla(160, 100%, 37%, 0.2); */
    background-color: rgba(100, 148, 237, 0.2);
  }
}</style>
