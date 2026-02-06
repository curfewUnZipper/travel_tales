import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1920&auto=format&fit=crop')",
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-center px-8 py-6">
        
        {/* Logo Left */}
        <div className="flex items-center">
          <Link href="/" className="absolute top-0 left-1">
            <Image
              src="/logo2.png"
              alt="Wayfarer's Echoes Logo"
              width={230}
              height={110}
              priority
            />
          </Link>
        </div>




        {/* Auth Right */}
        <div className="flex gap-6 text-sm font-semibold">
          <Link href="/login" className="hover:underline opacity-90">
            Login
          </Link>
          <Link href="/register" className="hover:underline opacity-90">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-[75vh]">
        
<h1
  className="
    font-playfair
    uppercase
    text-5xl md:text-7xl
    font-normal
    tracking-[0.6em]
    leading-tight
    text-white
  "
  style={{
  textShadow: `

  -10px -19px 0 #7e7e7e71
`

  }}
>
  EVERY JOURNEY DESERVES A STORY
</h1>



        <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl">
          Time passed, seasons changed, 
          yet we remained, 
          waiting for the one who went forth
          to return with stories.
        </p>

      </div>

    </main>
  );
}
