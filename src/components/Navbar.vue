<template>
  <nav>
    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn">
      <div></div>
      <div></div>
      <div></div>
    </label>

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
  padding: 0.5rem;
}
label.logo {
  color: var(--color-text);
  font-size: 2rem;
  line-height: 70px;
  padding: 0 20px;
  font-weight: bold;
}
label.logo img {
  height: 60px;
  width: 60px;
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
  padding: 10px 25px;
  border-radius: 3px;
  text-transform: uppercase;
}
a.active,
a:hover {
  background: #1d075f;
  transition: 0.5s;
}
.checkbtn {
  position: relative;
  font-size: 50px;
  color: black;
  float: right;
  line-height: 80px;
  cursor: pointer;
  display: none;
}
#check {
  display: none;
}

.checkbtn > div {
  height: 8px;
  width: 85%;
  margin: auto;
  border-radius: 5px;
  height: 5px;
  background-color: white;
  position: absolute;
  top: 15%;
  transition: 0.5s ease-in-out;
}

.checkbtn > :nth-child(2) {
  position: absolute;
  top: 45%;
}
.checkbtn > :nth-child(3) {
  position: absolute;
  top: 80%;
}

@media (max-width: 858px) {
  .checkbtn {
    display: block;
    width: 60px;
    height: 60px;
    /* background-color: gray; */
    padding: 0.25rem;
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

  #check:checked ~ .checkbtn > div {
    transform: translateY(18px) rotate(135deg);
  }

  #check:checked ~ .checkbtn > :nth-child(2) {
    transform: rotate(135deg);
  }
  #check:checked ~ .checkbtn > :nth-child(3) {
    transform: translateY(-20px) rotate(45deg);
  }
}
</style>
