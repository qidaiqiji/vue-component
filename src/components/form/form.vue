<template>
  <form>
      <slot></slot>
  </form>
</template>

<script>
export default {
    name: 'iForm',
    data() {
        return {
           fields: [] 
        }
    },
    props: {
        model: {
            type: Object,
        },
        rules: {
            type: Object,
        }
    },
    // 组件渲染顺序是由内而外，form-item在mounted时触发事件时，form的mounted还未触发，所以监听不到。
    // 父组件的created先于子组件的mounted执行，所以要在created监听子组件事件
    /**
     *  顺序
        父组件created
        子组件created
        子组件mounted
        父组件mounted
     */
    
    created() {
        console.log('父组件created')
        this.$on('on-form-item-add', (field) => {
            console.log('ooooo', field)
            if (field) this.fields.push(field)
        })
        this.$on('on-form-item-remove', (field) => {
            if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
        })
    },
    mounted() {
        console.log('父组件mounted')
    },
    methods: {
    },

}
</script>