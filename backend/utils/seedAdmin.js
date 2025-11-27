// backend/utils/seedAdmin.js
import "dotenv/config";
import { connectDB } from "../config/db.js";
import { User } from "../models/User.js";

const run = async () => {
  await connectDB();

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  let admin = await User.findOne({ email });

  if (!admin) {
    admin = await User.create({
      name: "Default Admin",
      email,
      password,
      role: "admin"
    });
    console.log("Admin created:", admin.email);
  } else {
    console.log("Admin already exists:", admin.email);
  }

  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
