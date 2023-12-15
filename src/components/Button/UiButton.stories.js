import UiButton from './UiButton.vue';

export default {
  title: 'UiButton',
  component: UiButton,
  tags: ['autodocs'],
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
  components: { UiButton },
  setup() {
    return { args };
  },
  template: '<UiButton v-bind="args">Button</UiButton>',
});
