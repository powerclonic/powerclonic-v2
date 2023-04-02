<template>
  <div class="divisor">
    <h2 class="labelDivisor">{{ label }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
@import url("@/assets/styles/tituloDivisor.css");
</style>
