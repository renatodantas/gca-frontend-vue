<template>
  <v-container>
    <v-row>
      <v-col>

    <!--
    <table>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Ativo</th>
        <th></th>
      </tr>
      <tr v-for="item in lista" :key="item.id">
        <td>
          <router-link :to="`/agrupamentos/${item.id}`">{{ item.id }}</router-link>
        </td>
        <td>{{ item.nome }}</td>
        <td class="text-center">
          <ActiveIcon :value="item.ativo"></ActiveIcon>
        </td>
        <td class="text-center">
          <DeleteIcon @delete="excluir(item)"></DeleteIcon>
        </td>
      </tr>
    </table>
    -->
    <v-data-table
      :headers="headers"
      :items="lista">
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
    headers: [
      { text: 'ID', value: 'id', align: 'right' },
      { text: 'Nome', value: 'name' },
      { text: 'Ativo', value: 'ativo', align: 'right' },
    ],
    lista: []
  }),
  
  created() {
    this.load()
  },
  
  methods: {
    load() {
      service.loadAll().then(res => {
        this.lista = res.results
      })
    }
  }
}
</script>