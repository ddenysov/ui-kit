import Row from './Row.vue';
import Column from './Column.vue';
const options = Array.from(Array(13).keys());
options.shift();
export default {
  title: 'Grid/Column',
  component: Column,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    sm: {
      control: { type: 'select' },
      options,
    },
    md: {
      control: { type: 'select' },
      options,
    },
    lg: {
      control: { type: 'select' },
      options,
    },
  },
};

export const DefaultColumn = (args) => ({
  components: { Column, Row },
  setup() {
    return { args };
  },
  template: '<Row>' +
    '<Column v-bind="args"><div class="bg-primary p-4 border-round">ITEM</div></Column>' +
    '<Column v-bind="args"><div class="bg-primary p-4 border-round">ITEM</div></Column>' +
    '<Column v-bind="args"><div class="bg-primary p-4 border-round">ITEM</div></Column>' +
    '<Column v-bind="args"><div class="bg-primary p-4 border-round">ITEM</div></Column>' +
    '</Row>',
  methods: {}
});
