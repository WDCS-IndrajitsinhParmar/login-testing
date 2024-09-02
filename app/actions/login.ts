"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export const loginAction = async (
  values: any
): Promise<{ message: string; status: boolean }> => {

  await signIn("credentials", {
    ...values,
    redirectTo: DEFAULT_LOGIN_REDIRECT,
  });
  return { message: "login successfull", status: true };
};
