<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit">
    <label for="email">Email</label>
    <Field id="email" type="text" name="email" />
    <ErrorMessage name="email" class="error" />

    <label for="password">Password</label>
    <Field id="password" type="text" name="password" />
    <ErrorMessage name="password" class="error" />

    <button type="submit">Submit</button>
  </Form>
</template>
<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { ErrorMessage, Field, Form } from "vee-validate";
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

function onSubmit(values: any) {
  alert(JSON.stringify(values, null, 2));
}
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
