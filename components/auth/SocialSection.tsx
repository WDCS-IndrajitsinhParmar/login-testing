"use client";
import React, { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

interface SocialSectionProps {}
const SocialSection: FC<SocialSectionProps> = () => {
  const loginAction = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant={"outline"}
        onClick={() => loginAction("google")}
      >
        <div className="flex items-center justify-around space-x-5">
          <FcGoogle className="h-5 w-5" />
          <p className="text-sm">Continue with Google</p>
        </div>
      </Button>
      {/* <Button
        size="lg"
        className="w-full"
        variant={"outline"}
        onClick={() => loginAction("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button> */}
    </div>
  );
};

export default SocialSection;
