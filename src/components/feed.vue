<template>
  <div class="feed">
    <div class="feed__user">
      <user name="joshua_l" :avatar="require('@/assets/img/user-2.png')" />
    </div>
    <div class="feed__content">
      <slot name="feed_content"/>
    </div>
    <toggler @onToggle="toggle"/>
    <div class="feed__comments" :class="{'_active': isShownComments}">
      <ul class="feed__comments-list">
        <li class="feed__comment" v-for="item in 4" :key="item">
          <comment author="joshua_l" text="Enable performance measuring in production, at the user's request "/>
        </li>
      </ul>
    </div>
  </div>
  <div class="feed__date">15 may</div>
</template>

<script>
import user from '@/components/user'
import toggler from '@/components/toggler'
import comment from '@/components/comment'

export default {
  name: 'feed',
  components: {
    user,
    toggler,
    comment
  },
  data () {
    return {
      isShownComments: false
    }
  },
  methods: {
    toggle () {
      this.isShownComments = !this.isShownComments
    }
  }
}
</script>
