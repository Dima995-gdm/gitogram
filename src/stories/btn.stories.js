import btn from '../components/btn'

export default {
  title: 'Button',
  component: { btn },
  args: {
    text: 'Button',
    wide: false
  }
}

export const defaultView = (args) => ({
  name: 'Стандартный вид',
  components: { btn },
  data () {
    return { args }
  },
  template: `
    <btn v-bind="args">{{args.text}}</btn>
    `
})
