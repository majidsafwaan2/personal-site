const SITE_PASSWORD = "244466666";
const PEPPER = "personal-site-gate-v1";

export const SITE_ACCESS_COOKIE = "site_access";

export function verifySitePassword(input: string): boolean {
  return input === SITE_PASSWORD;
}

export async function gateCookieValue(): Promise<string> {
  const data = new TextEncoder().encode(`${SITE_PASSWORD}:${PEPPER}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function isValidGateCookie(value: string | undefined): Promise<boolean> {
  if (!value) return false;
  const expected = await gateCookieValue();
  if (value.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= value.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}
