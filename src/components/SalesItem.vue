<template>
  <div class="row">
    <span>
      {{ Nome }}
    </span>
    <p>{{ "R$ " + (Math.round(Valor * 100) / 100).toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    Nome: { type: String },
    Valor: { type: Number },
  },
  created() {},
  data() {
    return {};
  },
  methods: {
    colorize() {
      return this.Valor > 0 ? "Green" : "red";
    },
  },
  computed: {},
};
</script>

<style scoped>
p {
  min-width: fit-content;
}
</style>
