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
            <li class="feeds__item">
              <feed>
                <template #feed_content>
                  <repository/>
                </template>
              </feed>
            </li>
          </ul>
        </div>
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

export default {
  name: 'feeds',
  components: {
    topline,
    feed,
    repository,
    logo,
    panel
  }
}
</script>
