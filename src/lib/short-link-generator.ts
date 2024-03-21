import { BASE_URL } from "@/constants/BASE_URL";

export async function ShortLinkGenerator(url: string) {
  const urlProvider = url.trim().toLowerCase();

  const res = await fetch(`${BASE_URL}/api`, {
    method: 'POST',
    body: JSON.stringify({ url: urlProvider }),
  })

  const data = await res.json();

  return data;
}