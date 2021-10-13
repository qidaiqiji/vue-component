<template>
  <div>
      <i-form
      :model="formInfo"
      :rules="rules"
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
                ]
            }
        }
    }
}
</script>

<style>

</style>