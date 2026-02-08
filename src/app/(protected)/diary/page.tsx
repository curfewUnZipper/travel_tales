"use client";

import { useEffect, useState } from "react";
import DiaryCard from "@/app/components/DiaryCard";
import Fab from "@/app/components/Fab";

export default function DiaryPage() {
  const [entries, setEntries] = useState([]);

  const userId = "demoUser"; // replace with JWT later

  const fetchEntries = async () => {
    const res = await fetch(`/api/diary?userId=${userId}`);
    const data = await res.json();
    setEntries(data);
  };

  const toggleVisibility = async (id: string) => {
    await fetch(`/api/diary/${id}`, { method: "PATCH" });
    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-700 to-sky-600 text-white p-8 pt-28">
      <h1 className="text-3xl font-bold mb-6">My Diary</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {entries.map((entry: any) => (
          <DiaryCard
            key={entry._id}
            entry={entry}
            onToggle={toggleVisibility}
          />
        ))}
      </div>

      <Fab />
    </main>
  );
}
