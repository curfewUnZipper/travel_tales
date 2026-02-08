import { connectDB } from "@/lib/db";
import Diary from "@/models/Diary";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const entry = await Diary.findById(params.id);
  entry.visibility =
    entry.visibility === "private" ? "public" : "private";

  await entry.save();

  return Response.json(entry);
}
