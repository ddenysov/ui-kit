import UiButton from '@/components/Prime/Button/UiButton.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: UiButton,
  title: 'UiButton',
  tags: ['autodocs'],
  //👇 Our events will be mapped in Storybook UI
  argTypes: {},
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

export const Default = {
  args: {
    size: 'md',
  }
};

export const Mini = {
  args: {
    size: 'sm',
  }
};

export const Micro = {
  args: {
    size: 'xs',
  }
};