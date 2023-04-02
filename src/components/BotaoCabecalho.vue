<template>
  <div class="botao">
    <p class="labelBotao">{{ label }}</p>
  </div>
</template>

<script scoped>
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
@import url("@/assets/styles/botaoCabecalho.css");
</style>
