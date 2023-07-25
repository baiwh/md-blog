<template>
  <div class="button-group">
    <!-- <div>
      <button @click="saveList" class="button-switch"> 多选收藏 </button>
      <button @click="saveList" class="button-switch"> 保存 </button>
    </div> -->
    <div class="button-box">
      <div v-for="(item, index) in btnData" v-bind:key="`btn-${index}}`">
        <button :class="selectedBtn === item[label] ? 'button-item-selected' : ''" 
          @click="onClick(item)">{{ item[label] }}</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectedBtn: '',
      saveButton: [],
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
    saveList() {
    }
  }
}
</script>

<style scoped lang="less">
.button-group {
  .button-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .button-switch{
    border: 1px solid #54b2ff;
    // background-color: #54b2ff;
    // color: #fff;
    color: #54b2ff;
    border-radius: 5px;
    padding: 3px 15px;
    margin: 0 50px 10px 10px;
  }

  .button-switch:hover{
    background-color: #daeefd;
  }

  button {
    color: #828282;
    margin: 3px;
    font-size: 15px;
    background-color: #fff;
    border: 2px solid transparent;
  }

  button:hover {
    cursor: pointer;
    color: #54b2ff;
  }

  .button-item-selected {
    color: #54b2ff;
    border-bottom: 2px solid #54b2ff;
  }
}
</style>

