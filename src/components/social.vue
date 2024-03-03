<template>
  <div class="social">
    <div class="social__item">
        <button class="social__btn">
          <div class="social__icon">
            <icon name="star"/>
          </div>
          <div class="social__name">Star</div>
        </button>
        <div class="social__counter">{{ stars }}</div>
    </div>
    <div class="social__item">
      <button class="social__btn">
          <div class="social__icon">
            <icon name="fork"/>
          </div>
          <div class="social__name">Fork</div>
        </button>
        <div class="social__counter">{{ forks }}</div>
    </div>
  </div>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'social',
  components: {
    icon
  },
  props: {
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
