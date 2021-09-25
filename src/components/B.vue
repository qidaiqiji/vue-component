<template>
  <div>
      ceshi
      <button @click="onDispatch">通知父组件</button>
      <C />
  </div>
</template>

<script>
import Emitter from '../mixins/emitter'
import C from './C.vue'
export default {
    name: 'componentB',
    mixins: [Emitter],
    components: {
        C
    },
    created() {
        this.$on('on-message', this.showMsg)
    },
    methods: {
        showMsg(params) {
            alert(params)
        },
        onDispatch() {
            this.dispatch('componentA', 'on-notice', '嘿嘿，我是子组件传来的信息')
        }
    }
}
</script>