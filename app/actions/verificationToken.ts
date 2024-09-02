import { dbConfig } from "@/db.config";

export const getVerificationTokenByEmailService = async (email: string) => {
  try {
    return await dbConfig.verificationToken.findFirst({
      where: {
        email,
      },
    });
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
