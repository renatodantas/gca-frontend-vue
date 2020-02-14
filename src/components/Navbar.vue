<template>
  <v-app-bar app color="indigo darken" dense dark>
    
    <v-img src="../assets/logo.png" alt="Logo" max-width="26" contain />

    <v-toolbar-title class="ml-2">
      <strong>GCA</strong>
    </v-toolbar-title>

    <router-link to="/" class="ml-10 cursor" v-slot="{ navigate }">
      <div @click="navigate">Projetos</div>
    </router-link>
    
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <div v-on="on" class="ml-5 cursor">
          Extras
        </div>
      </template>

      <v-list>
        <v-list-item @click="irPara('/agrupamentos')">
          Agrupamentos
        </v-list-item>
        <v-list-item @click="irPara('Home')">
          Classificações Negociais
        </v-list-item>
        <v-list-item @click="irPara('Home')">
          Classificações Técnicas
        </v-list-item>
        <v-list-item @click="irPara('Home')">
          Classificações Projeto
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <div class="cursor" v-on="on">
          <i class="fa fa-fw fa-user fa-lg"></i>
          Fulano Logado
        </div>
      </template>

      <v-list>
        <v-list-item @click="sair()">
          <i class="fa fa-fw fa-sign-out"></i> Sair
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    sair() {
      alert('Saindo...');
    },
    irPara(rota) {
      this.$router.push(rota)
    }
  }
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>