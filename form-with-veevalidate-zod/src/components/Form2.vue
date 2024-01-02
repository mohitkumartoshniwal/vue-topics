<template>
  <form @submit="onSubmit">
    <label for="email">Email</label>
    <input id="email" type="text" name="email" v-model="email" />
    <span class="error"> {{ errors.email }}</span>

    <label for="password">Password</label>
    <input id="password" type="text" name="password" v-model="password" />
    <span class="error">{{ errors.password }}</span>

    <button type="submit">Submit</button>
  </form>
</template>
<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm, useField } from "vee-validate";
import { z } from "zod";

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .min(1, "This is required")
      .email("It needs to be an email"),

    password: z.string().min(8, "Too short"),
  })
);

const { handleSubmit, errors } = useForm({ validationSchema });

const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit((values: any) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  margin: 0 auto;
}

.error {
  color: red;
}
</style>
