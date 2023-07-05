<template>
  <div class="box">
    <span> Saldo total das vendas. </span>
    <h3>{{ "R$ " + (Math.round(VendasTotal * 100) / 100).toFixed(2) }}</h3>
  </div>
</template>

<script>
export default {
  props: { VendasTotal: Number },
  created() {},
  data() {
    return {};
  },
  methods: {
    colorize() {
      return this.VendasTotal > 0 ? "Green" : "red";
    },
  },
  computed: {},
};
</script>

<style scoped>
h3 {
  color: v-bind(colorize());
}
.box {
  float: right;
  padding: 0.5rem;
  border: 0.1rem solid var(--color-border);
  border-radius: 5%;
  margin: 0.5rem;
}
</style>
