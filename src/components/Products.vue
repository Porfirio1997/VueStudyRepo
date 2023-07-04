<template>
  <div class="row">
    <img src="../assets/em_construcao.jpg" alt="imagem produto" />
    <span>{{ tipo }}</span>
    <span>{{ marca }}</span>
    <span>{{ quantidade }}</span>
    <span>{{ "R$ " + (Math.round(PrecoVenda * 100) / 100).toFixed(2) }}</span>
    <button>Adicionar ao Carrinho</button>
  </div>
</template>

<script>
export default {
  props: {
    tipo: String,
    marca: String,
    quantidade: Number,
    PrecoVenda: Number,
  },
};
</script>

<style scoped>
.row {
  border: 0.1rem solid var(--color-border);
  border-radius: 1rem;
  padding: 0.1rem 0;
  background-color: var(-vt-c-text-dark-2);
}
</style>
