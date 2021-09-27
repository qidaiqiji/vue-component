<template>
  <div>
      <label v-if="label">{{label}}</label>
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
export default {
    name: 'iFormItem',
    mixins: [ Emitter ],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    },
    created() {
        console.log('子组件created')
    },
    mounted() {
        console.log('子组件mounted')
        // 没有传prop则无需校验，传了prop就表示需要校验，组件挂载时将自身实例在父组件中缓存
        if (this.prop) {
            this.dispatch('iForm', 'on-form-item-add', this)
        }
    },
    methods: {
        
    },
    beforeDestroy() {  // 组件销毁前，也从父组件中移除
        this.dispatch('iForm', 'on-form-item-remove', this)
    }

}
</script>

<style>

</style>