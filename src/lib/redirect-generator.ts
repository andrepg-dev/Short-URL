import { BASE_URL } from "@/constants/BASE_URL";
import shortURLSchema from "./mongodb/models/shortURL-schema";

export async function redirectLinksGenerator() {
  const randomCharacters = Math.random().toString(36).substring(2, 7);

  // Si los caracteres randoms ya estan en la base de datos, generar otros

  const res = await shortURLSchema.findOne({ redirect: `${BASE_URL}/` + randomCharacters })

  if (res === null) {
    return `${BASE_URL}/${randomCharacters}`;
  }

  return redirectLinksGenerator();
}