<template>
  <div class="layout">
    <div class="nav-box">
      <Link :href="'/'" class="home-img-a"> <img src="./logo.png" class="home-img"> </Link>
      <div class="nav-box-list">
        <div class="nav-item" v-for="(item, index) in navigationList" :key="`nav_${index}`">
          <Link :href="item.page" :title="item.name" :isSelected="thisNav === item.page" />
        </div>
      </div>
    </div>

    <div class="content-box">
      <div class="content-box-slot">
        <slot />
      </div>
    </div>

    <footer class="footer-box">
      <a href="https://beian.miit.gov.cn/" target="_blank">
        ICP 备111号
      </a>
    </footer>
  </div>
</template>

<script setup>
import './../main.css'
import Link from '../components/Link.vue'
import { usePageContext } from './usePageContext'

const pageContext = usePageContext()
const thisNav = '/' + pageContext?.urlPathname?.split('/')[1]

const navigationList = [
  { name: 'blog', page: '/blogType' },
  { name: 'About Me', page: '/aboutMe' },
]

</script>

<style scoped lang="less">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav-box {
  border-bottom: 1px solid #dcdcdc;
  position: fixed;
  height: 50px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  z-index: 100;

  .home-img-a {
    width: 70px;

    .home-img {
      height: 30px;
      width: 30px;
    }
  }

  .nav-box-list {
    align-items: center;
    display: flex;

    .nav-item {
      height: 100%;
      min-width: 170px;

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
}

.content-box {
  flex: 1;
  margin: 70px 0 100px 0;
  padding: 0 3vw;

  .content-box-slot {
    width: 94vw;
  }
}

.footer-box {
  border-top: 1px solid #dcdcdc;
  height: 50px;
  position: absolute;
  bottom: 0;
  width: 100vw;
  display: grid;
  place-items: center;

  a:hover {
    /* background-color: hsla(160, 100%, 37%, 0.2); */
    background-color: rgba(100, 148, 237, 0.2);
  }
}
</style>
