<template>
  <div class="nav-cart">
    <span class="nav-cart-icon"> &#9992; </span>
    <!-- trocar icone -->
    <span class="nav-cart-count"
      >{{
        this.$store.state.cart.length < 9 ? this.$store.state.cart.length : "9+"
      }}
    </span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.nav-cart {
  height: 25px;
  width: 40px;
  overflow: hidden;
  position: relative;
}

.nav-cart-icon {
  position: absolute;
  font-size: 20px;
  top: 0;
  left: 15%;
}
.nav-cart-count {
  height: 15px;
  aspect-ratio: 1/1;
  background-color: red;
  border-radius: 50%;
  font-size: 10px;
  color: white;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
