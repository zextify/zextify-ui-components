<template>
  <div class="z-sample__container" @click="handleClick">
    <slot>
      <span v-text="label" />
      <span v-text="clicks" />
    </slot>
  </div>
</template>

<script>
export default {
  name: "SampleComponent",
  props: {
    label: {
      type: String,
      default: () => "Sample",
    },
  },
  data() {
    return {
      clicks: 0,
    };
  },
  methods: {
    handleClick() {
      this.clicks++;
      if (this.clicks >= 10) this.clicks = 0;
    },
  },
};
</script>

<style scoped>
.z-sample__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  width: 100px;
  height: 24px;
  border-radius: 6px;
  border: 1px solid grey;
  cursor: pointer;
  user-select: none;
}

.z-sample__container span {
  margin: 0 2px;
}
</style>
