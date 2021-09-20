import Button from '@/components/Button.vue';
import { Story } from '@storybook/vue3';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    content: {
      type: 'string',
      control: { type: 'text' },
    },
  },
};

const Template: Story = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const WithContent = Template.bind({});
WithContent.args = {
  content: 'hello world',
};
