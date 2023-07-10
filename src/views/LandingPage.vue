<template>
  <div class="wrapper">
    <h2>Página principal</h2>
    <br />
    <Products />
  </div>
</template>

<script>
import Products from "../components/Product/Products.vue";

export default {
  components: { Products },
  props: {},
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
