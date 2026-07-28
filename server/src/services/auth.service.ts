import { createUser } from "../repositories/auth.repository";

export const registerUser = async () => {
  const user = await createUser({
    fullName: "Dinesh",
    email: "dinesh@gmail.com",
    passwordHash: "123456",
    phone: "9876543210",
  });

  return {
    success: true,
    message: "User Registered",
    data: user,
  };
};