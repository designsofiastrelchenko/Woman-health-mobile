import type { RegisterStepDefinition } from "@/lib/types/auth-forms";
import { mockNetworkDelay } from "@/lib/api-mock/delay";

const REGISTER_STEPS: RegisterStepDefinition[] = [
  {
    step: 1,
    title: "Регистрация",
    submitLabel: "Создать аккаунт",
    fields: [
      {
        name: "fullName",
        label: "Ваше имя",
        placeholder: "Введите имя",
        kind: "text",
      },
      {
        name: "email",
        label: "Email",
        placeholder: "Введите email",
        kind: "email",
      },
      {
        name: "password",
        label: "Пароль",
        placeholder: "Введите пароль",
        kind: "password",
      },
      {
        name: "passwordConfirm",
        label: "Подтвердите пароль",
        placeholder: "Введите пароль",
        kind: "password",
      },
    ],
  },
  {
    step: 2,
    title: "Регистрация",
    submitLabel: "Продолжить",
    fields: [
      {
        name: "phone",
        label: "Телефон",
        placeholder: "+7 …",
        kind: "text",
      },
      {
        name: "birthDate",
        label: "Дата рождения",
        placeholder: "ДД.ММ.ГГГГ",
        kind: "text",
      },
      {
        name: "city",
        label: "Город",
        placeholder: "Город проживания",
        kind: "text",
      },
      {
        name: "doctorCode",
        label: "Код врача (необязательно)",
        placeholder: "Если есть приглашение",
        kind: "text",
      },
    ],
  },
];

export async function getRegisterStepDefinition(
  step: number
): Promise<RegisterStepDefinition | null> {
  await mockNetworkDelay(160);
  return REGISTER_STEPS.find((s) => s.step === step) ?? null;
}

export async function submitRegisterStepMock(
  step: number,
  payload: Record<string, string>
): Promise<{ ok: boolean }> {
  void payload;
  await mockNetworkDelay(900 + step * 200);
  return { ok: true };
}

export async function submitLoginMock(
  payload: Record<string, string>
): Promise<{ ok: boolean }> {
  void payload;
  await mockNetworkDelay(1100);
  return { ok: true };
}
