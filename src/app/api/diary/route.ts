import { connectDB } from "@/lib/db";
import Diary from "@/models/Diary";

export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  const entries = await Diary.find({ userId }).sort({ createdAt: -1 });

  return Response.json(entries);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const entry = await Diary.create(body);

  return Response.json(entry);
}
