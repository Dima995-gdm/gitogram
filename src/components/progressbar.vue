<template>
  <div class="progressbar" :class="{'_active': isActive}">
    <div class="progressbar__line"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.isActive = true
    })
  }
}
</script>
