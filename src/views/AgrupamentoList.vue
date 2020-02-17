<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table
          :headers="table.headers"
          :items="table.result.items"
          item-key="id"
          :server-items-length="table.result.count"
          class="elevation-4">
          
          <template v-slot:item.ativo="{ item: { ativo } }">
            <ActiveIcon :value="ativo" />
          </template>
          
          <template v-slot:item.actions="{ item }">
            <DeleteIcon @delete="excluir(item)" />
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ActiveIcon from '../components/ActiveIcon'
import DeleteIcon from '../components/DeleteIcon'

import * as service from '../service/agrupamento.service'

export default {
  name: 'AgrupamentoList',
  
  components: { ActiveIcon, DeleteIcon },

  data: () => ({
    table: {
      headers: [
        { text: 'ID', value: 'id', align: 'right' },
        { text: 'Nome', value: 'nome' },
        { text: 'Ativo', value: 'ativo', align: 'center' },
        { text: 'Actions', value: 'actions', align: 'center', sortable: false }
      ],
      result: {
        count: 0,
        page: 0,
        itemsPerPage: 0,
        totalPages: 0,
      }
    },
    alert: {
      exibir: false,
      tipo: '',
      mensagem: ''
    }
  }),
  
  created() {
    this.load()
  },
  
  methods: {
    load() {
      service.loadAll().then(res => this.table.result = res)
    },
    excluir(item) {
      this.$store.dispatch('mensagemErro', 'Agrupamento excluído com sucesso')
    }
  }
}
</script>