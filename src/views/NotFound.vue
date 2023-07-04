<template>
  <div class="container collumn">
    <h1>Not found</h1>
    <img src="../assets/em_construcao.jpg" alt="em construção" />
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  text-transform: uppercase;
}
img {
  height: 10rem;
  width: 20rem;
  object-fit: contain;
  aspect-ratio: 4/2;
}
.collumn {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
