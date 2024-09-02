import { dbConfig } from "@/db.config";

export const getUserByEmail = async (email: string) => {
  try {
    return await dbConfig.user.findUnique({ where: { email } });
  } catch (error: any) {
    console.log("error occured : ", error);
  }
};

export const getUserById = async (id: string) => {
  try {
    return await dbConfig.user.findUnique({ where: { id } });
  } catch (error: any) {
    console.log("error occured : ", error);
  }
};
