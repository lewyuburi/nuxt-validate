<template>
  <ValidationObserver v-slot="{ invalid, valid }" ref="observer">
    <ValidationProvider rules="required|min:3|alpha" v-slot="{ errors }" :bails="false">
      <input v-model="value" type="text">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </ValidationProvider>
    <p>It works!</p>
    <b v-if="invalid">invalid...</b>
    <b v-if="valid">valid!!</b>
  </ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      value: "1"
    }
  },
  mounted() {
    this.$refs.observer.validate();
  }
}
</script>
