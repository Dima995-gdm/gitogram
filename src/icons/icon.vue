<template>
    <component :is="name"/>
</template>

<script>
import * as icons from './variants'

export default {
  components: { ...icons },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
