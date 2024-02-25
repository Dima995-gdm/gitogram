<template>
  <div class="repository">
    <div class="repository__name">Vue.js</div>
    <p class="repository__description">
      JavaScript framework for building interactive web applications ⚡
    </p>
    <social/>
  </div>
</template>

<script>
import social from '@/components/social'

export default {
  name: 'repository',
  components: {
    social
  }
}
</script>
