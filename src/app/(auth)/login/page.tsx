"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push("/home");
    } else {
      alert("Invalid credentials");
    }

    setLoading(false);
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
        <div className="absolute inset-0" />
      </div>

      {/* ===== HEADER / LOGO SPACE ===== */}
      <header className="w-full py-6 flex justify-center relative z-10">
        <div className={`${greatVibes.className} text-black text-5xl md:text-6xl relative top-2 tracking-wide`}>
          Wayfarer’s Echoes
        </div>
      </header>

      {/* Logo Left */}
        <div className="flex  items-center">
          <Link href="/" className="absolute top-[-20] ">
            <Image
              src="/logo2.png"
              alt="Wayfarer's Echoes Logo"
              width={230}
              height={110}
              priority
            />
          </Link>
        </div>

      {/* ===== COLLAGE STRIP ===== */}
      <section className="relative w-full h-[45vh] flex items-center justify-center z-10">
        <div className="absolute left-[-6] flex gap-6 w-full px-6 overflow-hidden">
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
        <div className="w-full max-w-md p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30">

          <h2 className="text-xl font-bold mb-2 text-center">
            Welcome Back ✈️
          </h2>
          <h3 className="text-lg mb-6 text-center text-gray-200">
            Continue Your Journey
          </h3>

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

          <button
            onClick={handleLogin}
            className="w-full bg-sky-500 hover:bg-sky-600 transition-colors p-3 rounded-lg font-semibold text-white"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-sm mt-4 text-center">
            No account?{" "}
            <Link href="/register" className="underline hover:text-sky-300">
              Sign up
            </Link>
          </p>
        </div>
      </section>

    </main>
  );
}
