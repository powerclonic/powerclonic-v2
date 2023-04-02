<template>
  <header class="cabecalho">
    <h1 class="tituloCabecalho">powerclonic</h1>
    <div class="botoesCabecalho">
      <BotaoHeader label="SOBRE MIM" @click="navegarAte('sobre')" />
      <BotaoHeader label="PROJETOS" @click="navegarAte('projetos')" />
      <BotaoHeader label="CONTATO" @click="navegarAte('contato')" />
    </div>
  </header>

  <div class="container">
    <TituloDivisor label="SOBRE MIM" ref="sobre" />

    <article class="sobreMim">
      <section class="apresentacaoSobreMim">
        <h2 class="tituloSobreMim">Prazer, <strong>Matheus.</strong></h2>
        <p>
          Olá! Sou um programador full-stack com experiência em PHP, Laravel,
          JavaScript, VueJS e Banco de Dados SQL. Desenvolvo desde landing pages
          até sistemas mais completos e complexos, dependendo das suas
          necessidades. Meu objetivo é proporcionar a você a melhor solução, com
          o melhor design e tecnologia disponíveis no mercado. Acredito que a
          experiência do usuário é um dos pontos-chave para o sucesso de
          qualquer projeto, e é por isso que me dedico a criar interfaces
          intuitivas e eficientes.
        </p>
        <p>
          Neste meu portfólio você encontrará alguns dos meus projetos,
          incluindo desde este website até um bot do Discord. No momento,
          trabalho em uma instituição financeira, onde, em conjunto com minha
          equipe, desenvolvo sistemas que melhoram a experiência dos nossos
          usuários. Tenho orgulho de dizer que participei de projetos que
          ajudaram a melhorar a eficiência e a satisfação dos clientes da
          empresa.
        </p>
        <p>
          Ingressei no mundo do desenvolvimento em 2021, começando a programar
          jogos. Entretanto, depois de dois meses, percebi que minha paixão era
          o desenvolvimento web e, desde então, tenho me dedicado a essa área.
          Realizei muitos cursos, leituras e mentorias para me tornar um
          programador full-stack completo, capaz de entregar soluções
          personalizadas e de alta qualidade.
        </p>
        <p>
          Estou comprometido em entender suas necessidades e desenvolver
          soluções personalizadas que atendam a elas. Se você precisar de uma
          solução web para seu negócio, fique à vontade para entrar em contato
          comigo pelos meios que encontra no final desta página. Estou ansioso
          para ouvir de você e discutir como posso ajudá-lo a alcançar seus
          objetivos!
        </p>
      </section>
      <section class="imagemSobreMim">
        <figure class="imagemSobreMim">
          <img src="@/assets/images/matheus.webp" />
        </figure>
      </section>
    </article>

    <TituloDivisor label="PROJETOS" ref="projetos" />

    <article class="projetos">
      <CardProjeto
        v-for="(projeto, i) in projetos"
        :key="i"
        class="cardProjeto"
        :titulo="projeto.titulo"
        :descricao="projeto.descricao"
        :repositorio="projeto.repositorio"
        :imagem="projeto.imagem"
      />
    </article>

    <TituloDivisor label="CONTATO" ref="contato" />

    <article class="contatos">
      <CardContato
        v-for="(contato, i) in contatos"
        :key="i"
        class="cardContato"
        :titulo="contato.titulo"
        :link="contato.link"
        :imagem="contato.imagem"
      />
    </article>

    <p class="copyright">Matheus Dresch - 2023</p>
  </div>
</template>

<script>
import BotaoHeader from "@/components/BotaoCabecalho.vue";
import CardContato from "@/components/CardContato.vue";
import CardProjeto from "@/components/CardProjeto.vue";
import TituloDivisor from "@/components/TituloDivisor.vue";

export default {
  components: { BotaoHeader, TituloDivisor, CardProjeto, CardContato },
  data() {
    return {
      projetos: [
        {
          titulo: "Arca9 bot",
          descricao:
            "Fiz esse bot do Discord utilizando TypeScript e a biblioteca Discord.js",
          repositorio: null,
          imagem: require("@/assets/images/arcaninebot.webp"),
        },
        {
          titulo: "CredEasy",
          descricao:
            "Uma plataforma de crédito fictícia, feita utilizando PHP c/ Laravel e MySQL no backend e Vue 3 no frontend",
          repositorio: "https://github.com/matheus-dresch/CredEasyV2",
          imagem: require("@/assets/images/credeasy.webp"),
        },
        {
          titulo: "powerclonic.xyz",
          descricao:
            "O site que você está agora! Utilizei HTML, CSS e o frameork VueJS para fazer ele.",
          repositorio: "https://github.com/powerclonic/powerclonic-v2",
          imagem: require("@/assets/images/powerclonicxyz.webp"),
        },
      ],
      contatos: [
        {
          titulo: "LinkedIn",
          link: "https://www.linkedin.com/in/matheus-dresch/",
          imagem: require("@/assets/images/linkedin.svg"),
        },
        {
          titulo: "E-mail",
          link: "email:contato.matheusdresch@gmail.com",
          imagem: require("@/assets/images/email.svg"),
        },
        {
          titulo: "Instagram",
          link: "https://instagram.com/powermatheuss",
          imagem: require("@/assets/images/instagram.svg"),
        },
      ],
    };
  },
  methods: {
    navegarAte(destino) {
      window.scrollTo(0, this.$refs[destino].$el.offsetTop);
    },
  },
};
</script>

<style scoped>
@import url("@/assets/styles/principal.css");
</style>
