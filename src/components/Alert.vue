<template>
  <v-dialog
    v-model="exibir"
    max-width="300">
    
    <v-card class="mx-auto">
      <v-card-title :class="textClass">
        <v-spacer />
        <div>
          <i class="fa fa-fw" :class="iconClass" /> Informação
        </div>
        <v-spacer />
      </v-card-title>

      <v-divider class="pt-4"></v-divider>
      
      <v-card-text>
        {{ mensagem }}
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn text @click="fechar">
          Fechar
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Alert',
  methods: {
    fechar() {
      // Altera o status na store
      this.$store.commit('limparMensagem')
    }
  },
  computed: {
    tipo() { return this.$store.state.alert.tipo },
    mensagem() { return this.$store.state.alert.mensagem },
    exibir: {
      get() { return this.$store.state.alert.exibir },
      set() { this.fechar() }
    },
    iconClass() {
      switch(this.tipo) {
        case 'success':
          return 'fa-check'
        case 'warning':
          return 'fa-exclamation-triangle'
        default:
          return 'fa-times-circle'
      }
    },
    textClass() {
      switch(this.tipo) {
        case 'success':
          return 'green--text darken-1'
        case 'warning':
          return 'orange--text darken-4'
        default:
          return 'red--text'
      }
    },
  }
}
</script>
