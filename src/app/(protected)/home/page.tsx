export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 to-sky-600 text-white px-6 pt-28">
      
      {/* Welcome */}
      <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
      <p className="opacity-80 mt-2">
        Continue your journey or start a new adventure.
      </p>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          { title: "New Diary Entry 📓", desc: "Write today’s memory." },
          { title: "Create Gallery 🖼️", desc: "Add travel photos." },
          { title: "Manage Privacy 🔐", desc: "Control who sees what." },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10 hover:scale-[1.02] transition"
          >
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 opacity-80 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Recent Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl">
          <p className="opacity-70 text-sm">
            No entries yet — start your first travel story ✨
          </p>
        </div>
      </div>

    </main>
  );
}
