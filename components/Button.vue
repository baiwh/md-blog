<template>
  <div class="hotelItem">
    <img class="hotelImg" :src="imgSrc" />
    <!-- @mouseover="mouseoverTest" @mouseleave="mouseleaveTest"  -->
    <pre class="hotelDesc">{{ imgTitle }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['imgSrc', 'imgTitle'],
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
.hotelImg {
  height: 300px;
  width: 300px;
}

.hotelDesc {
  position: absolute;
  width: 300px;

}
</style>

