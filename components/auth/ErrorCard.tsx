import React, { FC } from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Header from "./Header";
import BackButton from "./BackButton";

interface ErrorCardProps {}
const ErrorCard: FC<ErrorCardProps> = (): JSX.Element => {
  return (
    <Card>
      <CardHeader>
        <Header label="Oops, Something Went Wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton href="/auth/login" label="Back to Login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
