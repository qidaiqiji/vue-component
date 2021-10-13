<template>
  <div>
      <i-form
      :model="formInfo"
      :rules="rules"
      ref="form"
      >
          <i-form-item
            label="姓名"
            prop="name"
          >
              <i-input v-model="formInfo.name" />
          </i-form-item>
          <i-form-item
            label="邮件"
            prop="mail"
          >
              <i-input v-model="formInfo.mail" />
          </i-form-item>
      </i-form>
      <button @click="onSubmit">提交</button>
      <button @click="onReset">重置</button>
  </div>
</template>

<script>
import iForm from '../components/form/form.vue';
import iFormItem from '../components/form/form-item.vue';
import iInput from '../components/input/input.vue';
export default {
    components: {
        iForm,
        iFormItem,
        iInput
    },
    data() {
        return {
            formInfo: {
                name: undefined,
                mail: undefined,
            },
            rules: {
                name: [
                    { required: true, message: '姓名不能为空', trigger: 'blur' },
                ],
                mail: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit() {
            // 回调函数的写法
            // this.$refs.form.validate(valid => {
            //     if (valid) {
            //         alert('校验成功')
            //     } else {
            //         alert('校验失败')
            //     }
            // })

            // promise的写法
            this.$refs.form.validate().then(() => {
                console.log('校验成功')
            }).catch(err => {
                console.log('校验失败', err)
            })
        },
        onReset() {
            this.$refs.form.resetFields()
        }
    }
}
</script>

<style>

</style>