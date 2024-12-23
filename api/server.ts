import app from "./src/app";
import mongoose from "mongoose";
import { globalConfig } from "./src/constants/configs";

const PORT = globalConfig.PORT;

// MongoDB connection options
const mongoOptions = {
  serverSelectionTimeoutMS: 30000, // Increased timeout
  socketTimeoutMS: 45000,
  connectTimeoutMS: 30000,
  maxPoolSize: 50,
  family: 4, // Force IPv4
};

console.log("Attempting to connect to MongoDB...");
if (!globalConfig.MONGODB_URL) {
  console.error("MONGODB_URL is not defined in environment variables");
  process.exit(1);
}

// Connect to MongoDB first, then start the server
mongoose
  .connect(globalConfig.MONGODB_URL, mongoOptions)
  .then(() => {
    console.log("Successfully connected to MongoDB");
    console.log("MongoDB connection state:", mongoose.connection.readyState);
    // Start server only after successful MongoDB connection
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to Connect to MongoDB", err);
    console.error("Error details:", {
      name: err.name,
      message: err.message,
      code: err.code,
    });
    process.exit(1); // Exit if MongoDB connection fails
  });

// Monitor MongoDB connection
mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB reconnected");
});

// Handle process termination
process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  } catch (err) {
    console.error("Error during MongoDB disconnect:", err);
    process.exit(1);
  }
});
