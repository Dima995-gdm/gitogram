import comment from '../components/comment'

export default {
  title: 'Comment',
  component: { comment },
  args: {
    author: 'Name',
    text: 'Text comment'
  }
}

export const defaultView = (args) => ({
  name: 'Стандартный вид',
  components: { comment },
  data () {
    return { args }
  },
  template: `
    <comment v-bind="args" />
    `
})
