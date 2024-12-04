import Conf from "@/config/config";
import { Client, Account, ID } from "appwrite";

// Define types for the user account creation and login
type CreateUserAccount = {
  email: string;
  password: string;
  name: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

// if (!Conf.NEXT_PUBLIC_PROJECT_URL) {
//   throw new Error("Appwrite endpoint URL is missing or undefined.");
// }
// if (!Conf.NEXT_PUBLIC_PROJECT_ID) {
//   throw new Error("Appwrite project ID is missing or undefined.");
// }

// console.log("Appwrite endpoint URL:", Conf.NEXT_PUBLIC_PROJECT_URL); // Log the URL
// console.log("Appwrite endpoint ID:", Conf.NEXT_PUBLIC_PROJECT_ID); // Log the ID

// console.log("Appwrite Project URL:", Conf.NEXT_PUBLIC_PROJECT_URL);
// console.log("Appwrite Project ID:", Conf.NEXT_PUBLIC_PROJECT_ID);

const appwriteClient = new Client();

appwriteClient
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67401e6c001015a83c8b");

// Create the Appwrite account instance
export const account = new Account(appwriteClient);

export class AppwriteService {
  // Create a new user account
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error: any) {
      console.error("Error creating user account:", error);
      throw error;
    }
  }

  // Login the user
  async login({ email, password }: LoginUserAccount) {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error: any) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

  // Check if the user is logged in
  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {
      console.error("Error checking login status:", error);
    }
    return false;
  }

  // Retrieve the current user details
  async getCurrentUser() {
    try {
      return account.get();
    } catch (error) {
      console.error("Error getting current user:", error);
    }
    return null;
  }

  // Logout the current user
  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
}

// Initialize the service instance
const appwriteService = new AppwriteService();

export default appwriteService;
