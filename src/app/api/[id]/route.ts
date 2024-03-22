import { BASE_URL } from "@/constants/BASE_URL";
import shortURLSchema from "@/lib/mongodb/models/shortURL-schema";
import { connectToDatabase } from "@/lib/mongodb/mongoose";

interface Params {
  id: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  connectToDatabase()
  let res = null;

  if (!params.id) return Response.json({ error: "No se ha encontrado el parámetro id" });

  const link = `${BASE_URL}/${params.id}`

  try {
    res = await shortURLSchema.findOne({ redirect: link });
  } catch (error) {
    res = { error: "Tu URL no se ha encontrado en el registro" }
  }
  return Response.json(res);
}
