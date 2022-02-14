<template>
  <select v-model="selectedOption" class="mx-3" @change="changeOption">
    <option value="">Select an option</option>
    <option v-for="(option, index) in options" :key="index">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: ["options"],
  data() {
    return {
      selectedOption: "",
    };
  },
  methods: {
    changeOption() {
      this.$emit("change-option", this.selectedOption);
    },
  },
};
</script>

<style>
</style>