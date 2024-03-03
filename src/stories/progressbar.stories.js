import progressbar from '../components/progressbar'

export default {
  title: 'Progressbar',
  component: { progressbar }
}

export const defaultView = () => ({
  name: 'Стандартный вид',
  components: { progressbar },
  template: `
    <progressbar />
    `
})
