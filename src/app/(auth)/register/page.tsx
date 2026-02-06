"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) router.push("/login");
    else alert("Registration failed");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-sky-500 text-white">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Account 🌍</h1>

        <input
          className="w-full p-3 mb-4 rounded-lg bg-white/20 outline-none"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 rounded-lg bg-white/20 outline-none"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 outline-none"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-lg font-semibold"
        >
          Sign Up
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account? <Link href="/login" className="underline">Login</Link>
        </p>
      </div>
    </main>
  );
}
