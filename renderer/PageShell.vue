<template>
  <div class="layout">
    <div class="nav-box">
      <div class="nav-item" v-for="(item, index) in navigationList" :key="`nav_${index}`">
        <Link :href="item.page" :title="item.name" :isSelected="thisNav === item.page" />
      </div>
    </div>

    <div class="content-box">
      <div class="blog-type-nav" v-show="thisNav === '/blogType'">
        <div class="blog-type-nav-item" v-for="(blogItem, blogIndex) in blogType" :key="`blog_nav_${blogIndex}`">
          <Link :href="`/blogType/${blogItem.typeName}`" :title="`${blogItem.typeName} (${blogItem.typeList.length})`"
            :isSelected="thisBlogType === blogItem.typeName" flexType="flex-start" />
        </div>
      </div>

      <div class="content-box-slot">
        <slot />
      </div>
    </div>

    <footer class="footer-box one-item-center">
      <a href="https://beian.miit.gov.cn/" target="_blank">
        ICP 备111号
      </a>
    </footer>
  </div>
</template>

<script setup>
import Link from '../components/Link.vue'
import './../main.css'
import { usePageContext } from './usePageContext'
import { blogType } from './../blogTypeNavList'

const pageContext = usePageContext()
const thisNav = '/' + pageContext?.urlPathname?.split('/')[1]
const thisBlogType = pageContext?.urlPathname?.split('/')[2] || blogType[0].typeName

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

.content-box {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  margin: 30px 0 100px 0;

  .content-box-slot {
    width: 75vw;
    padding: 0 30px;
  }
}

.blog-type-nav {
  width: 200px;

  .blog-type-nav-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

.footer-box {
  border-top: 1px solid #dcdcdc;
  height: 60px;
  position: absolute;
  bottom: 0;
  width: 80vw;

  a:hover {
    /* background-color: hsla(160, 100%, 37%, 0.2); */
    background-color: rgba(100, 148, 237, 0.2);
  }
}
</style>
