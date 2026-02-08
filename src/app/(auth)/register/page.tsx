"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) router.push("/login");
    else alert("Registration failed");
  };

  const images = [
    "/forest.jpg",
    "/snow.jpeg",
    "/beach.jpg",
    "/bonfire.jpg",
    "/snow2.jpeg",
    "/mountain.jpg",
    "/snow3.jpeg",
    "/camp.jpg",
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">

      {/* ===== FULLSCREEN BACKGROUND ===== */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg.jpg"
          alt="Background Landscape"
          fill
          priority
          className="object-cover"
        />
        {/* dark overlay for readability */}
        <div className="absolute inset-0 " />
      </div>

      {/* ===== HEADER / LOGO SPACE ===== */}
      <header className="w-full py-6 flex justify-center relative z-10">
        <div className="text-2xl md:text-3xl font-bold tracking-wide">
          Wayfarer’s Echoes
        </div>
      </header>

     {/* ===== COLLAGE STRIP ===== */}
    <section className="relative w-full h-[45vh] flex items-center justify-center z-10">

      <div className="absolute flex gap-6 w-full px-6 overflow-hidden">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative min-w-[200px] md:min-w-[240px] h-52 md:h-60 
            rounded-2xl overflow-hidden shadow-2xl
            ${i % 2 === 0 ? "rotate-[-5deg]" : "rotate-[4deg]"}
            hover:scale-105 transition duration-500`}
          >
            <Image
              src={src}
              alt="Adventure"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

    </section>


      {/* ===== FORM FLOAT ===== */}
      <section className="flex justify-center -mt-24 pb-20 px-4 relative z-10">
        <div className="w-full max-w-md p-8 bg-white/20 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/30">

          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account 🌍
          </h2>

          <input
            className="w-full p-3 mb-4 rounded-lg bg-white/90 text-gray-800 outline-none"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full p-3 mb-4 rounded-lg bg-white/90 text-gray-800 outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full p-3 mb-4 rounded-lg bg-white/90 text-gray-800 outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            className="w-full p-3 mb-4 rounded-lg bg-white/90 text-gray-800 outline-none"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            className="w-full bg-sky-500 hover:bg-sky-600 transition-colors p-3 rounded-lg font-semibold text-white"
          >
            Sign Up
          </button>

          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="underline hover:text-sky-300">
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
