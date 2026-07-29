import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "realestate_super_secret_key";

export function generateToken(payload: {
  id: string;
  email: string;
  role: string;
}) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}