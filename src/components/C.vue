<template>
  <div>
      我是C组件
      <button @click="onClick">我想通知A组件</button>
  </div>
</template>

<script>
import Emitter from '../mixins/emitter'
export default {
    name: 'componentC',
    mixins: [Emitter],
    methods: {
        onClick() {
            this.dispatch('componentA', 'on-notice', '嘿嘿，我是C组件传来的信息')
        }
    }
}
</script>