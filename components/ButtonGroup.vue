<template>
  <div class="button-group">
    <div v-for="(item, index) in btnData" v-bind:key="`btn-${index}}`">
      <button :class="selectedBtn === item[label] ? 'button-item-selected' : 'button-item'"
        @click="onClick(item)">{{ item[label] }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedBtn: ''
    }
  },
  props: ['btnData', 'label', 'onClickBtn'],
  mounted() {
  },
  methods: {
    onClick(item) {
      this.selectedBtn = item[this.label]
      this.onClickBtn(item)
    },
  }
}
</script>

<style scoped lang="less">
.button-group {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  .button-item {
    background-color: #fff;
    color: #828282;
    margin: 3px;
    border: 1px solid transparent;
  }

  .button-item:hover {
    color: #54b2ff;
  }

  .button-item-selected {
    background-color: #fff;
    margin: 3px;
    color: #54b2ff;
    border: 1px solid transparent;
    border-bottom: 1px solid #54b2ff;
  }
}
</style>

