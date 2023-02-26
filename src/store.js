import { reactive } from 'vue'

export const store = reactive({
  requestInfo: '',
  setRequestInfo(value) {
    this.requestInfo = value
  }
})

