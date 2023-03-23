<template lang="">
  <form class="px-4" @submit="handleSubmit">
    <div class="mb-6">
      <FormInput
        label="Username"
        v-model="form.title"
        placeholder="EpicWizard"
        id="username"
        type="text"
        :errors="v$.form.username.$errors"
      />
      <FormInput
        label="Password"
        v-model="form.password"
        placeholder="*********"
        id="password"
        type="password"
        :errors="v$.form.password.$errors"
      />
    </div>
    <FormButton />
  </form>
</template>
<script setup lang="ts">
import { required, helpers } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
const form = reactive({ username: "", password: "" });
const handleSubmit = (e: Event) => {
  e.preventDefault();
  v$.value.$validate();
  if (!v$.value.$error) {
    //    Some code
  }
};
const rules = computed(() => {
  return {
    form: {
      username: {
        required: helpers.withMessage(
          "The username field is required",
          required
        ),
      },

      password: {
        required: helpers.withMessage(
          "The password field is required",
          required
        ),
      },
    },
  };
});
const v$ = useVuelidate<any>(rules, form);
</script>
<style lang=""></style>
