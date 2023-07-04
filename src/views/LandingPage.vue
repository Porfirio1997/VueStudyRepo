<template>
  <div class="container">
    <h1>Bem vindo a Cyber Suplementos</h1>
    <products
      v-for="p in produtos"
      :tipo="p.type"
      :marca="p.brand"
      :quantidade="p.quantity"
      :PrecoVenda="p.retailPrice"
    />
  </div>
</template>
<script>
import products from "../components/Products.vue";
export default {
  components: { products },
  data() {
    return { produtos: [] };
  },
  created() {
    this.produtos = this.$store.state.products;
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
  line-height: 1;
}
</style>
