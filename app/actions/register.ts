"use server";
import { RegisterSchema } from "@/app/schema";
import { dbConfig } from "@/db.config";
import * as bcrypt from "bcrypt";
import * as Z from "zod";
import { getUserByEmail } from "../serverDetails/getUserDetails";
import { generateVerificationTokenService } from "./generateVerificationTokenService";
export const registerAction = async (
  values: Z.infer<typeof RegisterSchema>
): Promise<{ message: string }> => {
  console.log("HIT");
  return new Promise(async (res, rej) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) rej({ message: "invalid  fields" });
    //@ts-ignore
    const { email, password, name } = validatedFields?.data;
    console.log("email : ", { email, password, name });
    // const salt = await bcrypt.genSalt(10);
    // console.log("salt: ", salt);
    // const hashedPassword = await bcrypt.hash(password, 10);
    const isEmailExists = await getUserByEmail(email);

    if (!!isEmailExists) return { error: "Email already exists" };
    console.log("hit here ");
    await dbConfig.user.create({
      data: {
        name,
        email,
        //@ts-ignore
        password,
      },
    });
    const verificationToken = await generateVerificationTokenService(email);
    res({ message: "Confirmation Email sent" });
  });
};
