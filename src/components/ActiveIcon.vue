<template>
  <i class="fa fa-fw fa-lg" :class="classes"></i>
</template>

<script>
export default {
  name: 'ActiveIcon',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        'fa-check-circle green--text': this.value,
        'fa-times red--text': !this.value
      }
    }
  }
}
</script>
