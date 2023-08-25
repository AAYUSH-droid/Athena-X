import mongoose from "mongoose";
import logger from "../utils/logger";

export const connectDB = async () => {
  mongoose.set("strictQuery", false);

  try {
    await mongoose.connect(process.env.MONGOURI || "");
    console.log("⚡️[server]: Connected to MongoDB");
    logger.silly("⚡️[server]: Connected to MongoDB");
  } catch (error) {
    console.log(error);
    logger.error(error);
  }
};
