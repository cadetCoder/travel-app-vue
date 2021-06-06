<template>
  <span class="go-back">
    <button @click="goBack"><i class="fas fa-chevron-left"></i>Go back</button>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
