import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React, { FC } from "react";

interface FormErrorProps {
  message?: string;
}

const FormError: FC<FormErrorProps> = ({ message }): JSX.Element => {
  if (!message) return <></>;
  return (
    <div className="text-rose-500 p-3 rounded-md flex items-center gap-x-2 bg-rose-200 mt-6">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
