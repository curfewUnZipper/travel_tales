import { connectDB } from "@/lib/db";
import Diary from "@/models/Diary";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const entry = await Diary.create(body);
  return Response.json(entry);
}

export async function GET() {
  await connectDB();
  const entries = await Diary.find();
  return Response.json(entries);
}
