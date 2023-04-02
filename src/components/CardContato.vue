<template>
  <a class="card2" :href="link">
    <figure class="imagemCardContato">
      <img :src="imagem" />
    </figure>
    <h4 class="textoCardContato">
      {{ titulo }}
    </h4>
  </a>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    imagem: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("@/assets/styles/cardContato.css");
</style>
