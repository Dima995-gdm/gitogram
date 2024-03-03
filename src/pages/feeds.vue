<template>
  <topline>
    <template #topline_top>
      <logo/>
      <panel/>
    </template>
    <template #topline_content>
      <ul class="topline__users">
        <li class="topline__users-item" v-for="item in 10" :key="item">
          <div class="user">
            <a href="#" class="user__link">
              <img src="@/assets/img/user-2.png" class="user__img" />
              <div class="user__name">Josh</div>
            </a>
          </div>
        </li>
      </ul>
    </template>
  </topline>
  <main>
    <section class="feeds">
      <div class="container">
        <div class="feeds__wrap">
          <ul class="feeds__list">
            <li class="feeds__item" v-for="item in items" :key="item.id">
              <feed
              :username="item.owner.login"
              :userAvatar="item.owner.avatar_url"
              >
                <template #feed_content>
                  <repository
                  :title="item.name"
                  :description="item.description"
                  :stars="item.stargazers_count"
                  :forks="item.forks_count"
                  />
                </template>
              </feed>
            </li>
          </ul>
        </div>
        <slide />
      </div>
    </section>
  </main>
</template>

<script>
import topline from '@/components/topline'
import feed from '@/components/feed'
import repository from '@/components/repository'
import logo from '@/components/logo'
import panel from '@/components/panel'
import slide from '@/components/slide'

import * as api from '@/api'

export default {
  name: 'feeds',
  components: {
    topline,
    feed,
    repository,
    logo,
    panel,
    slide
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
