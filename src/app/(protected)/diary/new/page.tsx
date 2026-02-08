"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewDiary() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const createEntry = async () => {
    await fetch("/api/diary", {
      method: "POST",
      body: JSON.stringify({
        userId: "demoUser",
        title,
        content,
      }),
    });

    router.push("/diary");
  };

  return (
    <main className="p-8 text-white">
      <input
        placeholder="Title"
        className="p-3 w-full bg-black/20 rounded-lg mb-4"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="p-3 w-full bg-black/20 rounded-lg mb-4"
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={createEntry}
        className="bg-orange-500 px-6 py-3 rounded-lg"
      >
        Save
      </button>
    </main>
  );
}
