import { auth, signOut } from "@/auth";
import ClientComponent from "@/components/ClientComponent";
import { json } from "node:stream/consumers";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="bg-blue-500 mt-5 ml-5" type="submit">
            Sign out
          </button>
        </form>
      </div>
      {JSON.stringify(session)}
      <ClientComponent />
    </div>
  );
};

export default SettingsPage;
