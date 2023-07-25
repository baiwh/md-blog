<template>
  <div class="visaCard">
    <div class="hotelBox">
      <button-group :btnData="cityList" :label="'cityName'" :onClickBtn="selectedCityName" />
      <img-group :imgList="selectedList" :srcKey="'thumb'" :titleKey="'hotelName'" />
    </div>
  </div>
</template>

<script>
import sh200 from './上海/200.json';
import sh800 from './上海/800.json';
import js200 from './江苏/200.json';
import js800 from './江苏/800.json';
import zj200 from './浙江/200.json';
import zj800 from './浙江/800.json';
import ButtonGroup from '../../components/ButtonGroup.vue';
import ImgGroup from '../../components/ImgGroup.vue';

export default {
  data() {
    return {
      cityList: [
        { cityName: '上海200', cityList: sh200 },
        { cityName: '上海800', cityList: sh800 },
        { cityName: '江苏200', cityList: js200 },
        { cityName: '江苏800', cityList: js800 },
        { cityName: '浙江200', cityList: zj200 },
        { cityName: '浙江800', cityList: zj800 },
      ],
      selectedList: [],
    }
  },
  components: {
    ImgGroup,
    ButtonGroup,
  },
  mounted() {
    // this.selectedCityName(this.cityList[0])
  },
  methods: {
    selectedCityName(city) {
      this.selectedList = city.cityList
    },
  }
}
</script>

<style scoped lang="less">
.visaCard {
  .hotelBox {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;

  }

}
</style>
