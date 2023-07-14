<template>
  <div class="wrapper row gap">
    <ProductCard
      v-for="product in products"
      :DetailText="product.brand"
      :DetailHeadLine="product.type"
      :DetailQuantity="product.quantity"
      :DetailPrice="product.retailPrice"
      :DetailPricePromotion="0"
      :id="product.id"
      @addButton="addToCart"
      @minusButton="removeFromCart"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import products from "../../mocks/products";
export default {
  components: { ProductCard },
  props: {},
  created() {},
  data() {
    return { products: [...products] };
  },
  methods: {
    addToCart(id) {
      let prod = JSON.parse(
        JSON.stringify(products.filter((el) => el.id == id))
      );
      this.$store.commit("addOnetoCart", prod[0]);
    },

    removeFromCart(id) {
      this.$store.commit("removeOneFromCart", id);
    },
  },
  computed: {},
};
</script>

<style scoped></style>
