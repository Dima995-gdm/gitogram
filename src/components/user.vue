<template>
  <div class="user">
    <a href="#" class="user__link">
      <img :src="avatar" class="user__img" />
      <div class="user__name">{{ name }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>
