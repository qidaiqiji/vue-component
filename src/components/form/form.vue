<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "iForm",
  data() {
    return {
      fields: [],
    };
  },
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  provide() {
    return {
      form: this,
    };
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
    this.$on("on-form-item-add", (field) => {
      if (field) this.fields.push(field);
    });
    this.$on("on-form-item-remove", (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  },
  mounted() {},
  methods: {
    resetFields() {
      this.fields.forEach((field) => {
        field.resetField();
      });
    },
    // form里面的校验针对所有的表单项，在统一提交的时候校验，循环每个formItem中的校验
    validate(callback) {
      return new Promise((resolve, reject) => {
        let valid = true;
        let count = 0;
        this.fields.forEach((field) => {
          field.validate("", (errors) => {
            if (errors) {
              valid = false;
              reject(errors)
            }
            if (++count === this.fields.length) {
              // 全部完成
              resolve(valid);
              if (typeof callback === "function") {
                callback(valid);  // 可支持回调
              }
            }
          });
        });
      });
    },
  },
};
</script>