<template>
  <nav>
    <input type="checkbox" id="check" v-model="checkbox" />
    <label for="check" class="checkbtn"> X </label>
    <label class="logo">
      <a href="/">
        <img src="../assets/Logo Cyber.jpeg" alt="Cyber Suplementos" />
      </a>
    </label>
    <ul>
      <li v-for="route in Routes">
        <router-link :to="route.link">{{ route.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const Routes = [
  { link: "/", label: "Início" },
  { link: "/Vendas", label: "Vendas" },
  { link: "/Carrinho", label: "Carrinho" },
];
</script>

<style scoped>
/* Navigation bar */
nav {
  background: var(--color-background);
  height: 70px;
  width: 100vw;
  margin-bottom: 1px solid var(--color-border);
}
label.logo {
  color: var(--color-text);
  font-size: 2rem;
  line-height: 70px;
  padding: 0 20px;
  font-weight: bold;
}
label.logo img {
  height: 70px;
  width: 70px;
  object-fit: contain;
  aspect-ratio: 3/2;
}

nav ul {
  float: right;
  margin-right: 20px;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
}
nav ul li a {
  color: var(--color-text);
  font-size: 17px;
  padding: 7px 13px;
  border-radius: 3px;
  text-transform: uppercase;
}
a.active,
a:hover {
  background: #1d075f;
  transition: 0.5s;
}
.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 40px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
  }
  ul {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: var(--color-background);
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  nav ul li {
    display: block;
    margin: 50px 0;
    line-height: 30px;
  }
  nav ul li a {
    font-size: 20px;
  }
  a:hover,
  a.active {
    background: none;
    color: #5434af;
  }
  #check:checked ~ ul {
    left: 0;
  }
}
</style>
