"use client";

export default function DiaryCard({ entry, onToggle }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/10">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{entry.title}</h3>
        <button
          onClick={() => onToggle(entry._id)}
          className="text-xs px-3 py-1 rounded-lg bg-black/30"
        >
          {entry.visibility}
        </button>
      </div>

      <p className="mt-2 opacity-80 text-sm">
        {entry.content.slice(0, 100)}...
      </p>

      <p className="mt-2 text-xs opacity-60">
        {new Date(entry.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
}
