"use client";
import { Session } from "inspector";
import { useSession } from "next-auth/react";
import React from "react";

const ClientComponent = () => {
  const session = useSession();
  return <div>{JSON.stringify(session)}</div>;
};

export default ClientComponent;
