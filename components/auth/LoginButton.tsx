"use client";
import { useRouter } from "next/navigation";
import React, { FC, ReactNode } from "react";

interface LoginButtonProps {
  children: ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}
const LoginButton: FC<LoginButtonProps> = ({ children, mode, asChild }) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push("/auth/login");
  };

  return (
    <span onClick={onClickHandler} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
