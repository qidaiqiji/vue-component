<template>
  <div>
      
  </div>
</template>

<script>
import Form from './B.vue'
import Emitter from '../mixins/emitter'
export default {
    name: 'componentA',
    components: {
        B
    },
    mixins: [Emitter],
    created() {
        this.$on('on-notice', this.onNotice)
    },
    methods: {
        onClick() {
            this.broadcast('componentB', 'on-message', 'hello, 我是父组件带的参数')
        },
        onNotice(payload) {
            console.log('我是A组件，我监听到了', payload)
            alert(payload)
        }
    }
}
</script>

<style>

</style> 