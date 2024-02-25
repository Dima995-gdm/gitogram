<template>
  <div class="social">
    <div class="social__item">
        <button class="social__btn">
          <div class="social__icon">
            <icon name="star"/>
          </div>
          <div class="social__name">Star</div>
        </button>
        <div class="social__counter">156k</div>
    </div>
    <div class="social__item">
      <button class="social__btn">
          <div class="social__icon">
            <icon name="fork"/>
          </div>
          <div class="social__name">Fork</div>
        </button>
        <div class="social__counter">16</div>
    </div>
  </div>
</template>

<script>
import icon from '@/icons/icon'

export default {
  name: 'social',
  components: {
    icon
  }
}
</script>
