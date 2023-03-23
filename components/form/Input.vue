<template lang="">
  <div>
    <label :for="id" class="mb-2 block text-sm font-medium text-gray-900">{{
      label
    }}</label>
    <input
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      :class="[
        errors.length > 0 &&
          ' border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500',
      ]"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="onInput"
      :placeholder="placeholder"
    />
    <ErrorText :errors="errors" />
  </div>
</template>
<script lang="ts">
import type { ErrorObject } from "schema-utils/declarations/validate";
import type { PropType } from "vue";
import ErrorText from "./ErrorText.vue";

export default {
  components: { ErrorText },
  props: {
    label: String,
    modelValue: String,
    placeholder: String,
    id: String,
    type: String,
    errors: Array as PropType<ErrorObject[]>,
  },
  methods: {
    onInput(e: InputEvent) {
      e.preventDefault();
      const target = e?.target as HTMLInputElement;
      const newValue = target?.value;
      // prevents input of letters into phone field
      if (this.type === "tel" && !/^[0-9]*$/.test(newValue)) {
        const element = document.getElementById(
          this.id as string
        ) as HTMLInputElement;
        element.value = this.modelValue as string;
      } else {
        this.$emit("update:modelValue", newValue);
      }
    },
  },
  emits: ["update:modelValue"],
};
</script>
<style lang=""></style>
