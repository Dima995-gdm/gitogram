import toggler from '../components/toggler'

export default {
  title: 'Toggler',
  component: { toggler }
}

export const defaultView = () => ({
  name: 'Стандартный вид',
  components: { toggler },
  template: `
    <toggler />
    `
})
