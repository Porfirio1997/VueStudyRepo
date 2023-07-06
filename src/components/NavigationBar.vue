<template>
  <nav class="navbar">
    <router-link class="logo" to="/">Cyber Suplementos </router-link>

    <input type="checkbox" id="check" />
    <label for="check" class="checkbtn"> <div class="icon"></div> </label>

    <div class="menu">
      <ul class="list">
        <li v-for="route in routes">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {},
  created() {},
  data() {
    return {
      routes: [
        {
          path: "/",
          name: "Inicio",
        },
        {
          path: "/About",
          name: "Sobre",
        },
        {
          path: "/Sponsorship",
          name: "Apoiadores",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
nav {
  background-color: var(--color-background);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
}
.logo {
  color: white;
  margin-right: 50px;
}

.list {
  display: flex;
  gap: 25px;
}

#check,
nav label {
  display: none;
}

@media screen and (max-width: 600px) {
  .menu {
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }

  .list {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  nav label {
    display: inline-flex;
    align-items: center;
  }

  #check:checked ~ .menu {
    max-height: 100%;
  }
}
.checkbtn {
  width: 50px;
  height: 50px;
  position: relative;
  padding: 0;
}

.icon,
.icon::before,
.icon::after {
  position: absolute;
  width: 20px;
  height: 5px;
  border-radius: 10%;
  background: #ffffff;
  transform-origin: center;
}
.icon {
  left: 0;
  right: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.icon::before {
  content: " ";
  top: -200%;
  left: 0%;
}
.icon::after {
  content: " ";
  top: 200%;
}

#check:checked ~ label > .icon {
  transform: rotate(45deg);
}
#check:checked ~ label > .icon::before {
  transform: rotate(90deg) translateX(8px);
}
#check:checked ~ label > .icon:after {
  transform: rotate(90deg) translateX(-8px);
}
</style>
