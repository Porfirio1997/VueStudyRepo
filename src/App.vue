<template>
  <!--- <header>
  </header>-->
  <main>
    <div>
      <h2>Cadastro de Pessoal.</h2>
      <FieldComponent text-label="Nome de usuário">
        <input v-model.trim="nome" type="text" placeholder="Nome" />
      </FieldComponent>

      <FieldComponent TextLabel="Senha">
        <input v-model.trim="senha" placeholder="Senha" type="password" />
      </FieldComponent>

      <FieldComponent TextLabel="Peso">
        <input
          v-model.trim="peso"
          maxlength="5"
          placeholder="Peso"
          type="number"
        />
      </FieldComponent>

      <FieldComponent TextLabel="Altura">
        <input
          v-model.trim="altura"
          maxlength="4"
          placeholder="Altura"
          type="number"
        />
      </FieldComponent>

      <FieldComponent TextLabel="Telefone de contato">
        <input
          v-model.trim="telefone"
          placeholder="(99) 99999 - 9999"
          :maxlength="17"
          type="tel"
        />
      </FieldComponent>

      <FieldComponent TextLabel="Data Nascimento">
        <input v-model.trim="nascimento" placeholder="01/01/1991" type="date" />
      </FieldComponent>

      <button v-on:click="cadastrar()">Entrar</button>
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
export default {
  created() {
    this.$store.dispatch("fetchRegisters");
  },
  data() {},
  methods: {
    cadastrar() {
      var person = {
        nome: this.nome,
        senha: this.senha,
        Peso: this.peso,
        Altura: this.altura,
        telefone: this.telefone,
        nascimento: this.nascimento,
        sexo: this.sexo,
      };
      this.$store.dispatch("sendperson", person);
    },
    isInvalid(person) {
      return Object.values(person).some((el) => !el);
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
      return this.$store.getters.persons;
    },
  },
};
</script>

<style scoped></style>
