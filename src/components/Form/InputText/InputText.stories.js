import { action } from '@storybook/addon-actions';
import InputText from './InputText.vue';

export default {
  title: 'Form/InputText',
  component: InputText,
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

export const DefaultInputText = (args) => ({
  components: { InputText },
  setup() {
    return { args };
  },
  template: '<InputText @click="action" v-bind="args">Button</InputText>',
  methods: { action: action('click') }
});
