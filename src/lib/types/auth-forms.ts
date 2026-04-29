export interface AuthFieldDefinition {
  name: string;
  label: string;
  placeholder: string;
  kind: "text" | "email" | "password";
}

export interface RegisterStepDefinition {
  step: number;
  title: string;
  fields: AuthFieldDefinition[];
  submitLabel: string;
}
