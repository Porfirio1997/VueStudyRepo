<template>
  <header>
    <NavBar />
  </header>

  <main>
    <router-view />
  </main>
  <!---<footer>
  </footer> -->
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  created() {
    //this.$store.dispatch("fetchRegisters");
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped></style>
