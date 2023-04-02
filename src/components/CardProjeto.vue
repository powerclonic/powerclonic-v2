<template>
  <div class="card" :style="`background-image: url('${imagem}')`">
    <article class="conteudoCard">
      <div>
        <h3>{{ titulo }}</h3>
        <p>{{ descricao }}</p>
      </div>
      <a :style="estiloLinkRepositorio" :href="repositorio">REPOSITÓRIO</a>
    </article>
    <div class="cardOverlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    repositorio: {
      type: [String, null],
      required: true,
    },
    imagem: {
      type: String,
      required: true,
    },
  },
  computed: {
    linkImagem() {
      return require(String(this.imagem));
    },
    estiloLinkRepositorio() {
      return `background-image: ${
        this.repositorio
          ? "linear-gradient(90deg, var(--ciano-claro), var(--amarelo-claro))"
          : ""
      }`;
    },
  },
};
</script>

<style scoped>
@import url("@/assets/styles/cardProjeto.css");
</style>
