import topline from '../components/topline'

export default {
  title: 'Topline',
  component: { topline },
  args: {
    slots: {
      topline_top: {
        description: 'Default slot',
        template: `
        <p>123</p>
        `
      }
    }
  }

}

export const defaultView = (args) => ({
  name: 'Стандартный вид',
  components: { topline },
  data () {
    return { args }
  },
  template: `
  <topline v-bind="args">
  <template v-slot:topline_top>
    $args.slots.topline_top
  </template>
  </topline>
  `
})
