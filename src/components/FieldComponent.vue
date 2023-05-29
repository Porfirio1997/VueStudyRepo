<template>
  <span
    >{{ TextLabel }}
    <slot />
    <br />
  </span>
</template>

<script>
export default {
  props: {
    TextLabel: String,
  },
};
</script>

<style scoped>
label {
  color: #ffffff;
}
</style>
