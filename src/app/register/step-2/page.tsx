import { notFound } from "next/navigation";
import { getRegisterStepDefinition } from "@/lib/api-mock/auth-forms";
import { RegisterFormClient } from "@/components/auth/register-form-client";

export default async function RegisterStep2Page() {
  const definition = await getRegisterStepDefinition(2);
  if (!definition) {
    notFound();
  }
  return (
    <RegisterFormClient definition={definition} step={2} afterSuccessPath="/home" />
  );
}
