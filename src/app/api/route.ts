import { handleErrors } from "@/lib/mongodb/handleErrors";
import shortURLSchema from '@/lib/mongodb/models/shortURL-schema';
import { connectToDatabase } from "@/lib/mongodb/mongoose";
import { redirectLinksGenerator } from "@/lib/redirect-generator";

export async function GET() {
  connectToDatabase();

  const res = await shortURLSchema.find()
  return Response.json(res);
}

export async function POST(request: Request) {

  let body;

  try {
    body = await request.json();
    const urlByParams = body.url.trim().toLowerCase();

    // Create a new URL
    const newUrlShort = new shortURLSchema({
      urlProvider: urlByParams,
      redirect: await redirectLinksGenerator()
    })

    // Save the new URL if it doesn't exist
    const saveURL = await newUrlShort.save();

    return Response.json(saveURL);

  } catch (error: any) {
    let errorName = '';

    if (error.code === 11000) {
      const urlByParams = body.url.trim().toLowerCase();

      const findURL = await shortURLSchema.findOne({ urlProvider: urlByParams });
      return Response.json(findURL);
    }

    if (!error.code) {
      errorName = handleErrors(error.message)
    } else {
      const codeError = error.code;
      errorName = handleErrors(codeError);
    }

    return Response.json({ error: errorName }, { status: 400 });
  }
}


