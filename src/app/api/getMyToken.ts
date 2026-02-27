"use server";

import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyToken() {
  const myCookies = await cookies();
  const TokenFromCookies = myCookies.get("next-auth.session-token")?.value;

  if (!TokenFromCookies) return null;

  const decodedToken = await decode({
    token: TokenFromCookies,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  const realToken = decodedToken?.realTokenFromBackEnd;

  if (!realToken || typeof realToken !== "string") {
    return null;
  }

  return realToken;
}
