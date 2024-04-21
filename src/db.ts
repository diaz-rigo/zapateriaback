import mongoose from "npm:mongoose";

try {
  const conn = await mongoose.connect("mongodb+srv://rd209422:Cf3fSt1hdv9rf8Ud@cluster0.reakihy.mongodb.net/huejutla");
  console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) {
  console.error(error);
}
