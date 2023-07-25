<template>
  <div class="img-group">
    <div v-for="(item, index) in imgList" v-bind:key="`hotel-${index}}`" class="hotelItem">
      <img class="hotelImg" :src="item[srcKey]" />
      <!-- @mouseover="mouseoverTest" @mouseleave="mouseleaveTest"  -->
      <p class="hotelTitle" @click="searchName(item)">{{ item[titleKey] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['srcKey', 'titleKey', 'imgList', 'priceKey', 'urlType'],
  mounted() { },
  methods: {
    searchName(item) {
      if (this.urlType === 'hsbc') {
        window.open(`https://hotels.ctrip.com/hotels/${item.buProductId}.html`)
      } else {
        window.open(`https://www.baidu.com/s?ie=UTF-8&wd=${item[this.titleKey]}`)
      }
    },
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
.img-group {
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

    .hotelTitle {
      cursor: pointer;
      position: absolute;
      width: 300px;
    }
  }
}
</style>

