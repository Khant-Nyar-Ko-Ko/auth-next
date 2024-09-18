import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongo DB connection error. Please make sure Mongo DB is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something goes wrong" + error);
  }
}
