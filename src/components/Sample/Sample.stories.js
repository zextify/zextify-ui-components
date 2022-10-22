import SampleComponent from "./Sample.vue";

export default {
  title: "Example/SampleComponent",
  component: SampleComponent,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    label: {
      type: "string",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SampleComponent },
  template: '<sample-component v-bind="$props" />',
});

export const Base = Template.bind({});
Base.args = {
  label: "Counter",
};
