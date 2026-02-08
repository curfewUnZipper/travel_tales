import Link from "next/link";

export default function Fab() {
  return (
    <Link
      href="/diary/new"
      className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 w-14 h-14 flex items-center justify-center rounded-full text-3xl shadow-xl"
    >
      +
    </Link>
  );
}
