import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import React, { FC } from "react";

interface RegisterPageProps {}
const RegisterrPage: FC<RegisterPageProps> = (): JSX.Element => {
  return <RegisterForm />;
};

export default RegisterrPage;
