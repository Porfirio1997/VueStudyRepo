<template>
  <Span> Saldo total das vendas. </Span>
  <h3>{{ "R$ " + (Math.round(VendasTotal * 100) / 100).toFixed(2) }}</h3>
</template>

<script>
export default {
  Props: {},
  created() {},
  data() {
    return {
      VendasTotal: 150.0,
    };
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
</style>
