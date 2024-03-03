import user from '../components/user'

export default {
  title: 'User',
  component: { user },
  args: {
    name: 'Name',
    avatar: require('@/assets/img/user-2.png')
  }
}

export const defaultView = (args) => ({
  name: 'Стандартный вид',
  components: { user },
  data () {
    return { args }
  },
  template: `
  <user v-bind="args" avatar="require('@/assets/img/user-2.png')" />
  `
})
