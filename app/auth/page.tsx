import React, { FC } from "react";

interface ErrorPageProps {}
const ErrorPage: FC<ErrorPageProps> = (): JSX.Element => {
  return <ErrorCard />;
};

export default ErrorPage;
