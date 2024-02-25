<template>
  <div class="comment">
    <div class="comment__author">{{ author }}</div>
    <p class="comment__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    author: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
