<template>
  <div class="visaCard">
    <div class="hotelBox">
      <button-group :btnData="cityList" :label="'cityName'" :onClickBtn="selectedCity" />
      <img-group :imgList="filterHotel" :srcKey="'imageUrl'" :titleKey="'name'" :urlType="'hsbc'"/>
    </div>
  </div>
</template>

<script>
import cityList from './cityList.json';
import hotel from './hotel.json';
import ButtonGroup from '../../components/ButtonGroup.vue';
import ImgGroup from '../../components/ImgGroup.vue';

export default {
  data() {
    return {
      cityList,
      hotel,
      filterHotel: [],
    }
  },
  mounted() { 
    // this.selectedCity(this.cityList[0])
  },
  components: {
    ImgGroup,
    ButtonGroup,
  },
  methods: {
    selectedCity(city) {
      this.filterHotel = this.hotel.filter(item => item.arriveCityCode == city.cityCode)
    },
  }
}
</script>

<style scoped lang="less">
.visaCard {
  .hotelBox {}



}
</style>
