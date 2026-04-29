import { notFound } from "next/navigation";
import { getRegisterStepDefinition } from "@/lib/api-mock/auth-forms";
import { RegisterFormClient } from "@/components/auth/register-form-client";

export default async function RegisterStep1Page() {
  const definition = await getRegisterStepDefinition(1);
  if (!definition) {
    notFound();
  }
  return (
    <RegisterFormClient
      definition={definition}
      step={1}
      afterSuccessPath="/register/step-2"
    />
  );
}
