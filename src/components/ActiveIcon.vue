<template>
  <i class="fa fa-fw" :class="classes"></i>
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
        'fa-check-circle': this.value,
        'fa-times': !this.value
      }
    }
  }
}
</script>
