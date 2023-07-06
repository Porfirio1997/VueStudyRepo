<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <FooterBar />
  </footer>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  components: {
    NavigationBar,
    FooterBar,
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
