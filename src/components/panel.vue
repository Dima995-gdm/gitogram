<template>
  <div class="panel">
    <ul class="panel__list">
      <li class="panel__item">
        <a href="#" class="panel__link">
          <icon name="home"/>
        </a>
      </li>
      <li class="panel__item">
        <a href="#" class="panel__link">
          <img
            src="@/assets/img/user-1.png"
            width="32"
            height="32"
            class="panel__icon"
          />
        </a>
      </li>
      <li class="panel__item">
        <a href="#" class="panel__link">
          <icon name="signout"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import icon from '@/icons/icon.vue'

export default {
  name: 'panel',
  components: {
    icon
  }
}
</script>
