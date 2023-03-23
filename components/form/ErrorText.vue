<template lang="">
  <div class="input-errors" v-for="(error, index) of errors" :key="index">
    <p class="mt-2 text-sm text-red-600">{{ error.$message }}</p>
  </div>
</template>
<script lang="ts">
import type { ErrorObject } from "schema-utils/declarations/validate";
import type { PropType } from "vue";

export default {
  props: {
    errors: Array as PropType<ErrorObject[]>,
  },
  emits: ["update:modelValue"],
};
</script>
<style lang=""></style>
