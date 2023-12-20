import Row from './Row.vue';
import Column from './Column.vue';

export default {
  title: 'Grid/Row',
  component: Row,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
};

export const DefaultRow = (args) => ({
  components: { Row, Column },
  setup() {
    return { args };
  },
  template: '<Row>' +
  '<Column :sm="1"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '<Column :sm="1" v-bind="args"><div class="bg-primary p-4 border-round">1</div></Column>' +
  '</Row>',
  methods: {}
});
