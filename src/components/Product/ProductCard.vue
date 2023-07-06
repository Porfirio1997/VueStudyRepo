<template>
  <div class="product">
    <div class="product-image">
      <img src="" alt="em construção" />
    </div>
    <div class="product-detais">
      <span class="product-details-headline">{{ DetailHeadLine }}</span>
      <span class="product-details-text"> {{ DetailText }}</span>
      <span class="product-details-quantity"
        >Estoque :{{ DetailQuantity }}</span
      >
      <span class="product-details-price"
        >Preço : R$ {{ DetailPrice.padEnd(2, "0").replace(".", ",") }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    DetailText: String,
    DetailHeadLine: String,
    DetailQuantity: String,
    DetailPrice: String,
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
.product {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  height: 400px;
  background-color: grey;
  position: relative;
  border-radius: 10px;
}
.product-image {
  display: block;
  top: 0;
  width: 100px;
  height: 100px;
  background-color: black;
  border-radius: 50%;
  overflow: hidden;
}
.product-detais {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.product-details-headline {
  font: 1.5rem sans-serif;
  margin: 10px 0;
}

.product-details-text {
  font: 1rem sans-serif;
}
</style>
