<template>
  <div class="wrapper">
    <h2>Página principal</h2>
    <br />
    <div class="wrapper row gap">
      <ProductCard
        v-for="product in products"
        :DetailText="product.brand"
        DetailHeadLine="Whey Growth"
        DetailQuantity="10"
        DetailPrice="150.00"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/Product/ProductCard.vue";
import products from "../mocks/products";
export default {
  components: { ProductCard },
  props: {},
  created() {},
  data() {
    return { products: [...products] };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
