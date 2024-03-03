<template>
    <button class="btn" :class="baseClass">
    <slot/>
    </button>
</template>

<script>
export default {
  props: {
    wide: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    baseClass () {
      return {
        'btn--wide': this.wide
      }
    }
  }
}
</script>
