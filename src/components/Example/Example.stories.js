import ExampleComponent from "./Example.vue";

export default {
  title: "Example/ExampleComponent",
  component: ExampleComponent,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      msg: "string",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ExampleComponent },
  template: '<example-component v-bind="$props" />',
});

export const Base = Template.bind({});
Base.args = {
  msg: "Test prop msg",
};
