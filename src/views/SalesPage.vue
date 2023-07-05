<template>
  <div class="container column">
    <div class="row">
      <salesSum :VendasTotal="VendasTotal" />
    </div>

    <div class="column">
      <span v-for="sale in vendas">
        <SalesItem :Nome="sale.Name" :Valor="sale.Value" />
      </span>
    </div>
  </div>
</template>

<script>
import salesSum from "../components/SalesSum.vue";
import SalesItem from "../components/SalesItem.vue";
export default {
  components: { salesSum, SalesItem },
  Props: {},
  created() {
    this.vendas = this.$store.state.sales;
    this.VendasTotal = this.$store.getters.salesSum;
  },
  data() {
    return {
      vendas: [],
      VendasTotal: 0,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
