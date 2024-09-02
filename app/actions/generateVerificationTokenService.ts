import { Verification } from "./../../node_modules/@auth/core/src/errors";
import { v4 as uuidV4 } from "uuid";
import { getVerificationTokenByEmailService } from "./verificationToken";
import { dbConfig } from "@/db.config";

export const generateVerificationTokenService = async (email: string) => {
  try {
    const token = uuidV4();
    const expires = new Date(new Date().getTime() + 3600 * 1000);
    const existingToken = await getVerificationTokenByEmailService(email);
    if (!!existingToken) {
      await dbConfig.verificationToken.delete({
        where: {
          id: existingToken.id,
        },
      });
    }
    return await dbConfig.verificationToken.create({
      data: {
        email,
        token,
        expires,
      },
    });
  } catch (error: any) {
    console.log("error :  ", error);
    return null;
  }
};
