import { action } from '@storybook/addon-actions';
import Button from './Button.vue';

export default {
  title: 'Button/Button',
  component: Button,
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
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button @click="action" v-bind="args">Button</Button>',
  methods: { action: action('click') }
});
