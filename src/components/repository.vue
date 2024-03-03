<template>
  <div class="repository">
    <div class="repository__name">{{ title }}</div>
    <p class="repository__description" v-if="description">
      {{ description }}
    </p>
    <div class="repository__social">
      <social :stars="stars" :forks="forks"/>
    </div>
  </div>
</template>

<script>
import social from '@/components/social'

export default {
  name: 'repository',
  components: {
    social
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>
