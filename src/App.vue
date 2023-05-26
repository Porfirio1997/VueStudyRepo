<template>
  <!--- <header>
  </header>-->
  <main>
    <div>
      <h4>Cadastro de Pessoal.</h4>
      <FieldComponent Text="Nome de usuário">
        <input v-model.trim="nome" type="text" placeholder="Nome" />
      </FieldComponent>

      <FieldComponent Text="Senha">
        <input v-model.trim="senha" placeholder="Senha" type="password" />
      </FieldComponent>

      <FieldComponent Text="Peso">
        <input
          v-model.trim="peso"
          maxlength="5"
          placeholder="Peso"
          type="number"
        />
      </FieldComponent>

      <FieldComponent Text="Altura">
        <input
          v-model.trim="altura"
          maxlength="4"
          placeholder="Altura"
          type="number"
        />
      </FieldComponent>

      <FieldComponent Text="Telefone de contato">
        <input
          v-model.trim="telefone"
          placeholder="99999999999"
          :maxlength="13"
          type="tel"
        />
      </FieldComponent>

      <FieldComponent Text="Data Nascimento">
        <input v-model.trim="nascimento" placeholder="01/01/1991" type="date" />
      </FieldComponent>

      <FieldComponent :Text="Sexo">
        <input type="radio" id="male" value="false" v-model="sexo" />
        <label for="male">Masculino</label>

        <input type="radio" id="female" value="true" v-model="sexo" />
        <label for="female">Feminino</label>
      </FieldComponent>

      <button v-on:click="cadastrar()">Entrar</button>
    </div>

    <div>
      <p v-for="(reg, index) in Registrados">{{ reg }}</p>
    </div>
  </main>
  <!---<footer>
  </footer> -->
</template>

<script>
import FieldComponent from "./components/FieldComponent.vue";
import { ref } from "vue";
const nome = ref("");
const senha = ref("");
const peso = ref("");
const altura = ref("");
const telefone = ref("");
const nascimento = ref("");
const sexo = ref(false);
export default {
  created() {
    this.$store.dispatch("fetchRegisters");
  },
  data() {},
  methods: {
    cadastrar() {
      var reg = {
        nome: this.nome,
        senha: this.senha,
        Peso: this.peso,
        Altura: this.altura,
        telefone: this.telefone,
        nascimento: this.nascimento,
        sexo: this.sexo,
      };
      this.$store.dispatch("sendRegister", reg);
    },
    isInvalid(reg) {
      return Object.values(reg).some((el) => !el);
    },
    clear() {
      this.nome = "";
      this.senha = "";
      this.peso = "";
      this.altura = "";
      this.telefone = "";
      this.nascimento = "";
      this.sexo = false;
    },
  },
  computed: {
    Registrados() {
      return this.$store.getters.registers;
    },
  },
};
</script>

<style scoped>
main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

div {
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  gap: 0.3rem;
  border: 0.1rem gray solid;
  border-radius: 3%;
  padding: 5rem;
}

input {
  border: white 1px solid;
  color: black;
  margin: 0.3rem;
  padding: 0.3rem;
  border-radius: 0.2rem;
}

button {
  cursor: pointer;
  background-color: gray;
  border: #392386 1px solid;
  color: white;
  padding: 0.3rem;
  border-radius: 0.2rem;
  align-self: center;
  width: 100%;
}
</style>
