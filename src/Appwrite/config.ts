import Conf from "@/config/config";
import { Account, Client, ID } from "appwrite";

type CreateUserAccount = {
  email: string;
  userName: string;
  password: string;
};

type LoginUserAccountType = {
  email: string;
  password: string;
};

const appwiteClient = new Client();
appwiteClient
  .setEndpoint(Conf.NEXT_PUBLIC_PROJECT_URL)
  .setProject(Conf.NEXT_PUBLIC_PROJECT_ID);

const account = new Account(appwiteClient);

export class AppwriteService {
  async createUserAccount({ email, userName, password }: CreateUserAccount) {
    const userAccout = await account.create(
      ID.unique(),
      email,
      userName,
      password
    );

    if (userAccout) {
      return this.LoginUserAccount({ email, password });
    }
    return userAccout;
  }

  async LoginUserAccount({ email, password }: LoginUserAccountType) {
    return account.createEmailPasswordSession(email, password);
  }
}
