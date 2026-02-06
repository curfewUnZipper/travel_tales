import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    console.log("REGISTER ROUTE HIT");

    await connectDB();
    console.log("DB CONNECTED");

    const body = await req.json();
    console.log("BODY:", body);

    const { name, email, password } = body;

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash,
    });

    console.log("USER CREATED:", user);

    return Response.json({ ok: true, user });
  } catch (err: any) {
  if (err.code === 11000) {
    return Response.json(
      { error: "Email already registered" },
      { status: 400 }
    );
  }

  return Response.json({ error: err.message }, { status: 500 });
}

}
