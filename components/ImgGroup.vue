<template>
  <div class="img-group">
    <div v-for="(item, index) in imgList" v-bind:key="`hotel-${index}}`" class="hotelItem">
      <img class="hotelImg" :src="item[srcKey]" />
      <!-- @mouseover="mouseoverTest" @mouseleave="mouseleaveTest"  -->
      <pre class="hotelDesc">{{ item[titleKey] }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['srcKey', 'titleKey', 'imgList'],
  mounted() { },
  methods: {
    mouseoverTest() {
      console.log('??')
    },
    mouseleaveTest() {
      console.log('!!')
    }
  }
}
</script>

<style scoped lang="less">
.img-group{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .hotelItem {
  margin: 10px 10px 70px 10px;
  position: relative;
  

  .hotelImg {
    height: 300px;
    width: 300px;
  }

  .hotelDesc {
    position: absolute;
    width: 300px;

  }
}
}

</style>

