<template lang="">
  <form class="px-4" @submit="handleSubmit">
    <div class="mb-6">
      <FormInput
        label="Email"
        v-model="form.email"
        placeholder="example@gmail.com"
        id="email"
        type="email"
        :errors="v$.form.email.$errors"
      />
      <FormInput
        label="Name"
        v-model="form.name"
        placeholder="John"
        id="name"
        type="text"
        :errors="v$.form.name.$errors"
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
  {{ [userStore.user] }}
</template>
<script setup lang="ts">
import {
  required,
  helpers,
  email,
  minLength,
  maxLength,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { AuthSignupDto } from "~~/types/auth";
import { useUserStore } from "~~/stores/user";

const form = reactive<AuthSignupDto>({ name: "", email: "", password: "" });
const config = useRuntimeConfig();
const userStore = useUserStore();

const { registerWithEmail, userLogout, initializeUser } = useAuth();
const rules = computed(() => {
  return {
    form: {
      email: {
        required: helpers.withMessage(
          "The username field is required",
          required
        ),
        email: helpers.withMessage("Email is not valid", email),
      },
      name: {
        required: helpers.withMessage("The name field is required", required),
      },
      password: {
        required: helpers.withMessage(
          "The password field is required",
          required
        ),
        minLength: helpers.withMessage(
          "Password should be between 3 and 20 chars",
          minLength(3)
        ),

        maxLength: helpers.withMessage(
          "Password should be between 3 and 20 chars",
          maxLength(20)
        ),
      },
    },
  };
});

const v$ = useVuelidate<any>(rules, { form });

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  v$.value.$validate();
  if (!v$.value.$error) {
    const res = await registerWithEmail(form);
    console.log({ res });
  } else {
    console.error("ERRORS!");
  }
};
</script>
<style lang=""></style>
