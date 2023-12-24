import { action } from '@storybook/addon-actions';
import Navbar from './Navbar.vue';
import { ref } from "vue";

export default {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'red', 'pink', 'green', 'blue', 'yellow'],
      defaultValue: 'primary',
    },
    tint: {
      control: { type: 'select' },
      options: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
      defaultValue: 'primary',
    },
  },
};

export const DefaultButton = (args) => ({
  components: { Navbar },
  setup() {
    const items = ref([
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope'
      }
    ]);
    return { args, items };
  },
  template: '<Navbar :items="items" />',
  methods: { action: action('click') }
});
