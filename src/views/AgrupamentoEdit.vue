<template lang="pug">
  Layout(titulo='Agrupamentos')
    div.shadow.p-3.mb-5.bg-white.rounded
      form.form-horizontal(autoComplete='off' @submit.prevent='salvar()')
        div.form-group.row
          label.col-form-label.col-sm-2(for='id') ID
          div.col-sm-2
            input.form-control(
              type='number'
              name='id'
              pattern='[0-9]'
              :disabled='editando'
              v-model='selecionado.id')

        div.form-group.row
          label.col-form-label.col-sm-2(for='nome') Nome
          div.col-sm-6
            input.form-control(
              type='text'
              class=''
              name='nome'
              v-model='selecionado.nome')

        div.form-group.row
          div.col-sm-2 Ativo
          div.col-sm-6
            div.form-check
              input.form-check-input(type='checkbox' name='ativo' v-model='selecionado.ativo')
              label.col-form-label.form-check-label(for='ativo')

        div.form-group
          div.col-sm-offset-2.col-sm-6
            button.btn.btn-primary(type='submit')
              i.fas.fa-fw.fa-save
              | Salvar
            router-link.btn.btn-light.ml-2(to='/agrupamentos')
              i.fas.fa-fw.fa-times
              | Cancelar
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import Layout from './Layout'
import Datatable from '../components/Datatable'

export default {
  name: 'AgrupamentoList',
  components: { Layout, Datatable },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  created() {
    this.loadById(this.id)
  },
  computed: mapState('agrupamentos', [ 'selecionado', 'editando' ]),
  methods: {
    ...mapActions('agrupamentos', [ 'loadById', 'salvar' ])
  }
}
</script>