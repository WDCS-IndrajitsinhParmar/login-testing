"use client";
import React, { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}
const BackButton: FC<BackButtonProps> = ({ label, href }): JSX.Element => {
  return (
    <Button variant={"link"} className="font-normal w-full" size="sm" asChild>
      <Link href={href} className="text-[17px]">
        {label}
      </Link>
    </Button>
  );
};

export default BackButton;
