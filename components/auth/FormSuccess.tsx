import { CheckCircledIcon } from "@radix-ui/react-icons";
import React, { FC } from "react";
interface FormSuccessProps {
  message?: string;
}

const FormSuccess: FC<FormSuccessProps> = ({ message }) => {
  if (!message) return <></>;
  return (
    <div className="text-green-500 p-3 rounded-md flex items-center gap-x-2 bg-green-200 mt-6">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
