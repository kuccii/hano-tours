import { cookies } from "next/headers";
import { verifyAuthToken } from "@/lib/auth";

export async function requireAdmin() {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) return null;
  const payload = await verifyAuthToken(token).catch(() => null);
  if (!payload) return null;
  if (!["ADMIN", "MANAGER", "OPERATOR"].includes(String(payload.role))) return null;
  return payload;
}
