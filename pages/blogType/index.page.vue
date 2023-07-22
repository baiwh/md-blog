<template>
  <div class="blog-type-content">
    <div class="blog-type-nav">
      <div class="blog-type-nav-item" v-for="(type, typeIndex) in blogTypeNavList" :key="`blog_nav_${typeIndex}`">
        <Link :title="`${type.typeName} (${type.typeList.length})`" :isSelected="slectedBlogType === type.typeName"
          flexType="flex-start" @click="onChangeNav(type)" />
      </div>
    </div>

    <div>
      <div class="blog-type-nav-item" v-for="(item, blogIndex) in slectedSecondNavList"
        :key="`blog_second_nav_${blogIndex}`">
        <Link :href="`/blogType/${slectedBlogType}/${item}`" :title="item" flexType="flex-start" />
      </div>
    </div>
  </div>
</template>

<script>
import Link from '../../components/Link.vue'
import blogTypeNavList from './blogTypeNavList.json'

export default {
  data() {
    return {
      blogTypeNavList,
      slectedBlogType: '',
      slectedSecondNavList: [],
    }
  },
  components: {
    Link,
  },
  mounted() {
    const type = blogTypeNavList[0].typeName
    this.slectedBlogType = type
    this.slectedSecondNavList = blogTypeNavList.find(item => item.typeName === type).typeList || []
  },
  methods: {
    onChangeNav(type) {
      this.slectedBlogType = type.typeName
      this.slectedSecondNavList = type.typeList
    }
  }
}
</script>

<style scoped lang="less">
.blog-type-content {
  /* height: 100px; */
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;

  .blog-type-nav {
    width: 15vw;

    .blog-type-nav-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }


}
</style>