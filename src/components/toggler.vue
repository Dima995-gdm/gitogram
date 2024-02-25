<template>
    <button
    class="toggler"
    :class="{'_active': isActive}"
    @click="toggle">
      <span class="toggler__text">{{ isActive ? 'Hide' : 'View' }} issues</span>
      <div class="toggler__icon">
        <icon name="triangle"/>
      </div>
    </button>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'toggler',
  components: {
    icon
  },
  data () {
    return {
      isActive: false
    }
  },
  emits: ['onToggle'],
  methods: {
    toggle () {
      this.isActive = !this.isActive
      this.$emit('onToggle', this.isActive)
    }
  }
}
</script>
