<template>
  <div class="product-card">
    <div class="product-card-image">
      <img src="" alt="em construção" />
    </div>
    <div class="product-card-detais">
      <span class="product-card-details-headline">{{ DetailHeadLine }}</span>
      <span class="product-card-details-text"> {{ DetailText }}</span>
      <span class="product-card-details-quantity"
        >Estoque : {{ DetailQuantity }}</span
      >
      <span class="product-card-details-price"
        >Preço : R$
        {{ ("" + DetailPrice).padEnd(2, "0").replace(".", ",") }}</span
      >
      <span
        v-if="DetailPricePromotion !== 0"
        class="product-card-details-price-promotion"
        >Promoção : R$
        {{ ("" + DetailPricePromotion).padEnd(2, "0").replace(".", ",") }}</span
      >
      <span class="product-card-controls">
        <button @click="this.$emit('addButton', id)">+</button>
        <button
          v-if="this.$store.state.cart.filter((el) => el.id == id) !== []"
          @click="this.$emit('minusButton', id)"
        >
          -
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    DetailText: String,
    DetailHeadLine: String,
    DetailQuantity: Number,
    DetailPrice: Number,
    DetailPricePromotion: Number,
    id: Number,
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  min-width: 150px;
  min-height: 300px;
  background-color: var(--color-background);
  color: var(--color-text);
  position: relative;
  border-radius: 10px;
  padding: 0 5px;
  position: relative;
  border: var(--vt-c-divider-dark-2) 1px solid;
}

.product-card-image {
  display: block;
  width: 100px;
  height: 100px;
  background-color: var(--color-background);
  border-radius: 50%;
  overflow: hidden;
}
.product-card-image img {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
}
.product-card-detais {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.product-card-details-headline {
  font: 1.5rem sans-serif;
  margin: 10px 0;
}

.product-card-details-text {
  font: 1rem sans-serif;
}

.product-card-controls {
  display: flex;
  * {
    flex: 1 1 30px;
    padding: 1rem;
  }
}
</style>
