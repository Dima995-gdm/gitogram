<template>
  <div class="topline">
    <div class="container topline__container">
      <div class="topline__wrap">
        <div class="topline__top">
          <slot name="topline_top"/>
        </div>
        <div class="topline__content" v-if="$slots.topline_content">
          <slot name="topline_content"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'topline'
}
</script>
