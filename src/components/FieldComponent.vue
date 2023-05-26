<template>
  <label>
    {{ Text }}
  </label>
  <br />
  <slot />
  <br />
</template>

<script setup>
defineProps({
  Text: {
    type: String,
  },
});
</script>

<style scoped>
label {
  color: #ffffff;
}
label input {
  height: 1rem;
  border: white 1px solid;
  color: black;
  margin: 0.1rem;
  padding: 1rem;
  border-radius: 0.2rem;
}
</style>
