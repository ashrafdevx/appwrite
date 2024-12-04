import dotenv from "dotenv";
import path from "path";

// Load environment variables from the correct path
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const Conf = {
  NEXT_PUBLIC_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
  NEXT_PUBLIC_PROJECT_URL: process.env.APPWRITE_PROJECT_URL,
};

export default Conf;
